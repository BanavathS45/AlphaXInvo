import React from "react";

const ProfileCard = () => {
  return (
    <div className="dProfileCard">
      <div className="profile-card">
        <div className="quoteCard">
          <span>“</span>
        </div>
        <div className="profile-content">
          <p className="highlighted-text">
            <strong>Jugal Shah</strong> is the founder, CXO, and growth hacker
            at
            <strong> Leo9 Studio</strong> headquartered in Mumbai, India, and an
            office in N.J., U.S.A..
          </p>
          <a href="#learn-more" className="learn-more">
            know more
          </a>
          <div className="profile-details">
            <h3>Jugal Shah</h3>
            <p>
              Founder, Head of UX at Leo9 Studio. Behavioral science and
              Neuromarketing expert.
            </p>
            <a href="#linkedin" className="linkedin-link">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="profile-image">
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/634/891/original/cartoon-a-boy-waving-hand-free-vector.jpg"
            alt="Jugal Shah"
            className="image"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
