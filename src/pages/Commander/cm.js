import styles from "./cm.module.css";
import image from '../../assets/image.png';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { style } from "@mui/system";

function Cm() {
    const [errors, setErrors] = useState({});
    const [showErrors, setShowErrors] = useState(false);

    let navigate = useNavigate();
    const handleInputChange = (e) => { };

    const HandleSubmit = (values) => {
        let newErrors = {};
        let Error=false;

        if (!values.firstName.match(/^[a-zA-Z]+$/)) {
            newErrors.fst = '*Utiliser seulement des lettres.';
            Error=true;
        }

        if (!values.lastName.match(/^[a-zA-Z]+$/)) {
            newErrors.lst = '*Utiliser seulement des lettres.';
            Error=true;
        }

        if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            newErrors.email = '*Utiliser une adresse mail valide.';
            Error=true;
        }

        if (!values.phone.match(/^[0-9]+$/) || values.phone.length !== 8) {
            newErrors.phone = '*Utiliser exactement 8 chiffres.';
            Error=true;
        }

        if (values.pays === "") {
            newErrors.pays = "*required.";
            Error=true;
        }

        if (values.gouv === "") {
            newErrors.gouv = "*required.";
            Error=true;
        }

        if (values.ville === "") {
            newErrors.ville = "*required.";
            Error=true;
        }

        if (values.address === "") {
            newErrors.address = "*required.";
            Error=true;
        }

        if (values.codePostal === "") {
            newErrors.codePostal = "*required.";
            Error=true;
        }

        if (!Error)
        {
            navigate('/confirmer');
        }

        setErrors(newErrors);
        setShowErrors(true);

        

    };

    return (
        <div className={styles.big}>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    pays: "",
                    gouv: "",
                    ville: "",
                    address: "",
                    codePostal: "",
                }}
                onSubmit={HandleSubmit}
            >
                <Form action="../cofirmer" method="get" className={styles.forms} >
                    <div className={styles.commander}>
                        <div className={styles.class}>
                            <div className={styles.ddiv}>
                                <div className={styles.ss_container1}>
                                    <label htmlFor="firstName" className={styles.titre}>Prénom: <span className={styles.req}>*</span></label>
                                    <Field type="text" className={styles.inputt} name="firstName" placeholder="Prénom" />
                                    <div className={styles.error}>
                                        {showErrors && errors.fst && <p style={{ margin: -5, padding: 0 }}>{errors.fst}</p>}
                                    </div>
                                </div>
                                <div className={styles.ss_container1}>
                                    <label htmlFor="lastName" className={styles.titre}>Nom: <span className={styles.req}>*</span></label>
                                    <Field type="text" className={styles.inputt} name="lastName" placeholder="Nom" />
                                    <div className={styles.error}>
                                        {showErrors && errors.lst && <p style={{ margin: -5, padding: 0 }}>{errors.lst}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.ddiv}>
                                <div className={styles.ss_container1}>
                                    <label htmlFor="email" className={styles.titre}>Email: <span className={styles.req}>*</span></label>
                                    <Field type="email" className={styles.inputt} name="email" placeholder="Your email" />
                                    <div className={styles.error}>
                                        {showErrors && errors.email && <p style={{ margin: -5, padding: 0 }}>{errors.email}</p>}
                                    </div>
                                </div>
                                <div className={styles.ss_container1}>
                                    <label htmlFor="phone" className={styles.titre} id={styles.ph}>Téléphone: <span className={styles.req}>*</span></label>
                                    <Field type="tel" className={styles.inputt} name="phone" placeholder="Your phone" />
                                    <div className={styles.error}>
                                        {showErrors && errors.phone && <p style={{ margin: -5, padding: 0 }}>{errors.phone}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.ddiv2}>
                                <div className={styles.ss_container2}>
                                    <label htmlFor="pays" className={styles.titre} >Pays: <span className={styles.req}>*</span></label>
                                    <Field as="select" id={styles.pays} className={styles.selectt} name="pays">
                                        <option value="" className={styles.vv}>Pays</option>
                                        <option value="TU">Tunisia</option>
                                    </Field>
                                    <div className={styles.error}>
                                        {showErrors && errors.pays && <p style={{ margin: -5, padding: 0 }}>{errors.pays}</p>}

                                    </div>
                                </div>

                                <div className={styles.ss_container2}>
                                    <label htmlFor="gouv" className={styles.titre}>Gouvernorat: <span className={styles.req}>*</span></label>
                                    <Field as="select" className={styles.selectt} name="gouv">
                                        <option className={styles.vv} value="">Gouvernorat</option>
                                        <option value="Ariana">Ariana</option>
                                        <option value="Béja">Béja</option>
                                        <option value="Ben Arous">Ben Arous</option>
                                        <option value="Bizerte">Bizerte</option>
                                        <option value="Gabès">Gabès</option>
                                        <option value="Gafsa">Gafsa</option>
                                        <option value="Jendouba">Jendouba</option>
                                        <option value="Kairouan">Kairouan</option>
                                        <option value="Kasserine">Kasserine</option>
                                        <option value="Kébili">Kébili</option>
                                        <option value="Le Kef">Le Kef</option>
                                        <option value="Mahdia">Mahdia</option>
                                        <option value="La Manouba">La Manouba</option>
                                        <option value="Médenine">Médenine</option>
                                        <option value="Monastir">Monastir</option>
                                        <option value="Nabeul">Nabeul</option>
                                        <option value="Sfax">Sfax</option>
                                        <option value="Sidi Bouzid">Sidi Bouzid</option>
                                        <option value="Siliana">Siliana</option>
                                        <option value="Sousse">Sousse</option>
                                        <option value="Tataouine">Tataouine</option>
                                        <option value="Tozeur">Tozeur</option>
                                        <option value="Tunis">Tunis</option>
                                        <option value="Zaghouan">Zaghouan</option>
                                    </Field>
                                    <div className={styles.error}>
                                        {showErrors && errors.gouv && <p style={{ margin: -5, padding: 0 }}>{errors.gouv}</p>}

                                    </div>
                                </div>

                                <div className={styles.ss_container2}>
                                    <label htmlFor="ville" className={styles.titre}>Ville: <span className={styles.req}>*</span></label>
                                    <Field type="text" name="ville" placeholder="Ville" className={styles.ville} id={styles.ville}>

                                    </Field>
                                    <div className={styles.error}>
                                        {showErrors && errors.ville && <p style={{ margin: -5, padding: 0 }}>{errors.ville}</p>}

                                    </div>

                                </div>
                            </div>

                            <div className={styles.ddiv3}>
                                <div className={styles.ss_container3}>
                                    <label htmlFor="codePostal" id={styles.zc} className={styles.titre}>Code Postal:  <span className={styles.req}>*</span></label>
                                    <Field type="text" name="codePostal" placeholder="Code Postal" className={styles.ville} />
                                    <div className={styles.error}>
                                        {showErrors && errors.codePostal && <p style={{ margin: -5, padding: 0 }}>{errors.codePostal}</p>}

                                    </div>
                                </div>

                                <div className={styles.ss_container3}>
                                    <label htmlFor="address" className={styles.titre}>Adresse: <span className={styles.req}>*</span></label>
                                    <Field type="text" id={styles.address} className={styles.address} name="address" placeholder="Adresse" />
                                    <div className={styles.error}>
                                        {showErrors && errors.address && <p style={{ margin: -5, padding: 0 }}>{errors.address}</p>}

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tt}>
                            <img src={image} className={styles.imaage} />
                            <p className={styles.firstparagraph}>Bague CELOR en Or 375/1000 Blanc et oxyde blanc</p>
                        </div>
                    </div>



                    <div className={styles.bouttton}>
                        <input type="button" value="Retourner" className={styles.retourner} />
                        <input type="submit" value="Continuer" className={styles.continuer} />
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Cm;