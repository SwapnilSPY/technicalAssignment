import React from 'react';

const UserComponent = props => {
    const {
        userObj = {}
    } = props;
    const {
        name = "-",
        email = "-",
        phone = "-",
        website = "-"
    } = userObj;
    const isUserEmpty = Object.keys(userObj).length === 0 && userObj.constructor === Object;

    return (
        <div className="user-info-main">
            <h1 className="user-info-heading">User Information</h1>
            <div className="user-info-card">
                {isUserEmpty ? <p className="user-card-row not-found-label">User data not found</p> :
                    <>
                        <h2 className="user-card-name">{name}</h2>
                        <p className="user-card-row user-card-email">Email: {email}</p>
                        <p className="user-card-row">Phone: {phone}</p>
                        <p className="user-card-row">Website: {website}</p>
                    </>
                }
            </div>

        </div>
    );
};

export default UserComponent;