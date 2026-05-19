function User(props) {
    let{userObj}=props;
    return <div className="text-center p-5 shadow-2xl rounded-2xl shadow-gray-400 border-2 border-blue-400">
        <h2 className="text-3xl">{userObj.name}</h2>
        <p className="font-bold mt-5">{userObj.email}</p>
        <img src={userObj.image} alt="" className="block mx-auto rounded-3xl mt-5"/>
    </div>
}
export default User