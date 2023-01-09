function Profile() {
  return (
    <div className="contents">
      <div>Update profile</div>

      <div>
        <input type="text" name="name" placeholder="Full name" className="form" />
      </div>
      <div>
        <input type="email" name="email" placeholder="Email" className="form" />
      </div>
      <div>
        <input type="text" name="age" placeholder="Age" className="form" />
      </div>
      <div>
        <label htmlFor="active">Active</label>
        <input id="active" type="checkbox" name="active" className="chk" />
      </div>

      <div className="btn-submit-container">
        <button className="btn-submit">Update</button>
      </div>
    </div>
  );
}

export default Profile;
