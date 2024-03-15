import React from 'react'
import './style/mentor-style.css'
import photo from '../../assets/images/3.png'
import { useNavigate } from 'react-router-dom'

const MentorShip = () => {
	const navigate = useNavigate()
	const handleButtonClick = () => {
		navigate('/fragen')
	}
	return (
		<div className="mentor_ship_section_container" id="Mentor-ship">
			<div className="mentor_ship_description_and_button">
				<h1 className="mentor_ship_section_title">Mentor - Ship</h1>
				<div className="mentor_ship_description">
					<p className="mentor_ship_section_paragraph">
						Wir bieten ebenfalls ein Mentor-Ship an. Hier werden sie
						mind. 1 Aal pro Wochen einen Video-Call mit einem
						unserer Spezialisten. haben, daneben Jibt es einen
						permanenten Austausch über Whatapp-Ein Mentor- Ship ist
						persönlicher wie ein seminar, hier we wird und kann auf
						Ihre persönlichen Anferderungen meht eingegangen
					</p>
					<p className="mentor_ship_section_paragraph">
						Auch nier ist die Nachtrage aktuell sehr noch, so dass
						wir eine kleine Bewerbung von Imen brauden, um eine
						Vorselektion treflen zu können
					</p>

					<p className="mentor_ship_section_paragraph_bold">
						Das Mentor-Ship dauert 3 Monale und kann jederzeit
						gestartet werden, der Preis beläuft sich auf CHF /Euro
						7000,- tür alle 3 Monale
					</p>
				</div>
				<button
					className="mentor_ship_button"
					onClick={handleButtonClick}
				>
					<span className="mentor_ship_button_text">Bewerben</span>
				</button>
			</div>
			<div className="mentor_ship_image_container">
				<img
					src={photo}
					alt="mentor_ship"
					className="image_mentor_ship"
				/>
			</div>
		</div>
	)
}

export default MentorShip
