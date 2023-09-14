import styles from "./Commander.module.css";
import image from '../../assets/image.png';
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";


async function sendEmail(userEmail, imageSrc, productName,id) {
    try {
        const response = await fetch('http://localhost:8000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userEmail, imageSrc, productName,id }), // Send user's email, image, and product name to the backend
        });

        if (response.status === 200) {
            return true; // Email sent successfully
        } else {
            return false; // Email sending failed
        }
    } catch (error) {
        console.error('Error sending email:', error);
        return false; // Handle error and return false
    }
}


function Commander() {
	const navigate = useNavigate();
	const location = useLocation();
	const product = location.state?.product;
	const imageSrc = `${product[1]}`;
	console.log(imageSrc)

	const [errors, setErrors] = useState({});
	const [showErrors, setShowErrors] = useState(false);

	const handleSubmit = async (values) => {
		let newErrors = {};

		if (!values.firstName.match(/^[a-zA-Z ]+$/)) {
			newErrors.fst = '*Utiliser seulement des lettres.';
		  }
		  
		  if (!values.lastName.match(/^[a-zA-Z ]+$/)) {
			newErrors.lst = '*Utiliser seulement des lettres.';
		  }
		  

		if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
			newErrors.email = '*Utiliser une adresse mail valide.';
		}

		if (!values.phone.match(/^[0-9]+$/) || values.phone.length !== 8) {
			newErrors.phone = '*Utiliser exactement 8 chiffres.';
		}

		if (values.countryy === "Country") {
			newErrors.country = "*Select a country.";
		}

		if (values.city === "City") {
			newErrors.city = "*Select a city.";
		}

		if (values.zipcode === "Zip code") {
			newErrors.zipcode = "*Select a zip code.";
		}

		if (values.state === "State") {
			newErrors.state = "*Select a state.";
		}

		setErrors(newErrors);
		setShowErrors(true);

		if (Object.keys(newErrors).length === 0) {
			const emailSent = await sendEmail(values.email, imageSrc, product[2],product[0]);
			if (emailSent) {
			  navigate('/confirmer', { state: { formData: values, product: product } });
			} else {
			  // Handle email sending failure
			}
		  }

	};

	return (
		<div className={styles.big}>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					phone: "",
					countryy: "",
					city: "",
					zipcode: "",
					state: "",
					address: ""
				}}
				onSubmit={handleSubmit}
			>
					<Form action="/confirmer" method="post" className={styles.forms} >

					<div className={styles.container}>

                    <div className={styles.container_form}>


						<div className={styles.ddiv}>
							<div className={styles.ss_container1}>
								<label htmlFor="firstName" className={styles.titre}>Prénom</label>
								<Field type="text" className={styles.inputt} name="firstName" placeholder="Prénom" required />
								<div className={styles.error}>
									{showErrors && errors.fst && <p style={{ margin: -5, padding: 0 }}>{errors.fst}</p>}
								</div>
							</div>
							<div className={styles.ss_container1}>
								<label htmlFor="lastName" className={styles.titre}>Nom</label>
								<Field type="text" className={styles.inputt} name="lastName" placeholder="Nom" required />
								<div className={styles.error}>
									{showErrors && errors.lst && <p style={{ margin: -5, padding: 0 }}>{errors.lst}</p>}
								</div>
							</div>
						</div>






						<div className={styles.ddiv1}>
							<div className={styles.ss_container2}>
								<label htmlFor="email" className={styles.titre}>E-mail</label>
								<Field type="email" className={styles.inputt} name="email" placeholder="Your email" required />
								<div className={styles.error}>
									{showErrors && errors.email && <p style={{ margin: -5, padding: 0 }}>{errors.email}</p>}
								</div>
							</div>
							<div className={styles.ss_container2}>
								<label htmlFor="phone" className={styles.titre} id={styles.ph}>Numéro</label>
								<Field type="tel" className={styles.inputt} name="phone" placeholder="Your phone" required />
								<div className={styles.error}>
									{showErrors && errors.phone && <p style={{ margin: -5, padding: 0 }}>{errors.phone}</p>}
								</div>
							</div>
						</div>









						<div className={styles.ddiv2}>
							<div className={styles.ss_container3}>
								<label htmlFor="country" id={styles.country} className={styles.titre} >Pays</label>
								<Field as="select" id={styles.countryy} className={styles.selectt} name="country" required>
									<option value="" className={styles.vv}>Country</option>
									<option value="TU">Tunisia</option>
								</Field>
								{showErrors && errors.countryy && <p style={{ margin: -5, padding: 0 }}>{errors.countryy}</p>}
							</div>

							<div className={styles.ss_container3}>
								<label htmlFor="city" id={styles.ci} className={styles.titre}>Ville</label>
								<Field as="select" id={styles.City} className={styles.selectt} name="city" required>
									<option className={styles.vv} value="">City</option>
									<option value="TUN">Tunis</option>
									<option value="SF">Sfax</option>
									<option value="SS">Sousse</option>
									<option value="KR">Kairouan</option>
									<option value="MT">Métouia</option>
									<option value="KB">Kebili</option>
									<option value="BZ">Bizerte</option>
									<option value="SB">Sidi Bouzid</option>
									<option value="GB">Gabès</option>
									<option value="AR">Ariana</option>
									<option value="JD">Jendouba</option>
									<option value="GF">Gafsa</option>
									<option value="MS">Msaken</option>
									<option value="MD">Medenine</option>
									<option value="BJ">Béja</option>
									<option value="KS">Kasserine</option>
									<option value="MN">Monastir</option>
									<option value="HM">Hammamet</option>
									<option value="TT">Tataouine</option>
									<option value="MR">La Marsa</option>
									<option value="BA">Ben Arous</option>
									<option value="SZ">Sakiet ez Zit</option>
									<option value="ZS">Zarzis</option>
									<option value="BG">Ben Gardane</option>
									<option value="MH">Mahdia</option>
									<option value="HS">Houmt Souk</option>
									<option value="FC">Fouchana</option>
									<option value="KR">Le Kram</option>
									<option value="BD">Le Bardo</option>
									<option value="Ek">El Kef</option>
									<option value="Eh">El Hamma</option>
									<option value="NB">Nabeul</option>
									<option value="DJ">Djemmal</option>
									<option value="KB">Korba</option>
									<option value="MT">Menzal Temime</option>
									<option value="GH">Ghardimaou</option>
									<option value="MG">Menzel Bourguiba</option>
									<option value="RD">Radès</option>
									<option value="MN">Manouba</option>
									<option value="KB">Kélibia</option>
								</Field>
								{showErrors && errors.city && <p className={styles.error}>{errors.city}</p>}
							</div>

							<div className={styles.ss_container3}>
								<label htmlFor="zipcode" className={styles.titre}>Zip code</label>
								<Field type="text" className={styles.inputt} name="zipcode" placeholder="Zip code" required />


								{showErrors && errors.zipcode && <p className={styles.error}>{errors.zipcode}</p>}
							</div>
						</div>









						<div className={styles.ddiv3}>
							<div className={styles.ss_container4}>
								<label htmlFor="state" id={styles.st} className={styles.titre}>Etat</label>
								<Field as="select" name="state" className={styles.state} id={styles.State} required>
									<option value="" className={styles.vv}>Etat</option>
									<option value="kkk">kkkk</option>

								</Field>
								{showErrors && errors.state && <p className={styles.error}>{errors.state}</p>}
							</div>

							<div className={styles.divad}>
								<label htmlFor="address" id={styles.add} className={styles.titre}>Adresse</label>
								<Field type="text" id={styles.Address} className={styles.inputt} name="adresse" placeholder="Address" />
							</div>
						</div>
                        </div>






						<div className={styles.tt}>
							<img src={product[1]} className={styles.imaage} />
							<div className={styles.parbt}>
								<p className={styles.firstparagraph}>{product[2]}</p>
							</div>
						</div>

				</div>

				<div className={styles.bouttton}>
					<input type="button" value="Retour" className={styles.bt} required onClick={() => { navigate(`/item/product${localStorage.getItem("product")}`,{ state: { product: product} }) }} />
					<input type="submit" value="Continuer" className={styles.mbt} required />
				</div>

			</Form>
		</Formik>
		</div >
	);
}

export default Commander;