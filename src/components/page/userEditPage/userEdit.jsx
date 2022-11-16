import React, { useState, useEffect } from "react";
import { validator } from "../../../utils/validator";
import TextField from "../../common/form/textField";
import API from "../../../API";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multySelectField";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const UserEdit = ({ userId }) => {
    const [data, setData] = useState({
        name: "",
        email: "",
        profession: "",
        sex: "Male",
        qualities: []
    });
    const [qualities, setQualities] = useState({});
    const [professions, setProfessions] = useState([]);
    const [errors, setErrrors] = useState({});

    const history = useHistory();

    const getProfessionById = (id) => {
        for (const prof of professions) {
            if (prof.value === id) {
                return { _id: prof.value, name: prof.label };
            }
        }
    };
    const getQualities = (elements) => {
        const qualitieArray = [];
        for (const elem of elements) {
            for (const quality in qualities) {
                if (elem.value === qualities[quality].value) {
                    qualitieArray.push({
                        _id: qualities[quality].value,
                        name: qualities[quality].label,
                        color: qualities[quality].color
                    });
                }
            }
        }
        return qualitieArray;
    };

    const transform = (data) => {
        return data.map((qual) => ({ label: qual.name, value: qual._id }));
    };

    useEffect(() => {
        API.users.getById(userId).then(({ profession, qualities, ...data }) =>
            setData({
                ...data,
                qualities: transform(qualities),
                profession: profession._id
            })
        );

        API.professions.fetchAll().then((data) => {
            const professionsList = Object.keys(data).map((professionName) => ({
                label: data[professionName].name,
                value: data[professionName]._id
            }));
            setProfessions(professionsList);
        });

        API.qualities.fetchAll().then((data) => {
            const qualitiesList = Object.keys(data).map((optionName) => ({
                value: data[optionName]._id,
                label: data[optionName].name,
                color: data[optionName].color
            }));
            setQualities(qualitiesList);
        });
    }, []);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validatorConfig = {
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            },
            isName: {
                message: "Имя введено некорректно"
            }
        },
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },

        profession: {
            isRequired: {
                message: "Обязательно выберите Вашу профессию"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const { profession, qualities } = data;
        API.users
            .update(userId, {
                profession: getProfessionById(profession),
                qualities: getQualities(qualities),
                ...data
            })
            .finally(history.goBack());
        console.log({
            ...data,
            profession: getProfessionById(profession),
            qualities: getQualities(qualities)
        });
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 offset-md-3 p-4 shadow">
                    {data && professions.length > 0 && (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Имя"
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Электронная почта"
                                type="text"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <SelectField
                                label="Выбери свою профессию"
                                name="profession"
                                onChange={handleChange}
                                options={professions}
                                defaultOption="Choose..."
                                error={errors.profession}
                                value={data.profession}
                            />
                            <RadioField
                                defaultOption="Male"
                                options={[
                                    { name: "Male", value: "Male" },
                                    { name: "Female", value: "Female" },
                                    { name: "Other", value: "Other" }
                                ]}
                                value={data.sex}
                                name="sex"
                                onChange={handleChange}
                                label="Выберите Ваш пол"
                            />
                            <MultiSelectField
                                options={qualities}
                                onChange={handleChange}
                                defaultValue={data.qualities}
                                name="qualities"
                                label="Выберите Ваши качества"
                            />
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="btn btn-primary w-100 mx-auto"
                            >
                                Submit
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

UserEdit.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserEdit;
