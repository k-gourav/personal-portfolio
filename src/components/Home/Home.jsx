import React from 'react'
import profile from '../../assets/profile.jpg'
import waves from '../../assets/waves.svg'
import '../../App.css'
import './Home.css'

export default function Home() {
  return (
    <div className='home-section'>
        <img className='profile-img' src={profile} alt="profile-pic" />
        <div className="profile-title">
            <p className="profile-title-content">
            I’m Kumar Gourav — a <span id='role'>frontend developer</span>, who loves building creative websites.
            </p>
        </div>
        <img className='wavy-underline' src={waves} alt="wavy-underline" />
        <div className="profile-descript">
          <p className="profile-descript-content">
            I've always had the curiosity to learn and build something creative. Through this journey, I got introduced to <strong>frontend development</strong> and started building creative websites.
          </p>
          <p className="profile-descript-content">
            Being a <strong>developer</strong>, I keep myself engaged with building projects that can solve my problems as well as other's problems.
          </p>
          <p className="profile-descript-content">
            Apart from these, I enjoy long distance <strong>cycling</strong> and <strong>running</strong> for my well-being. It keeps me refreshed and cool which eventually boosts my productivity.
          </p>
        </div>

    </div>
  )
}
