const user = {
    name: 'Gautam Buddha',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
}

const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 }
]

const Profile = () => {
    return (
        <>
            <h1>{user.name}</h1>
            <img className="buddha"
                src={user.imageUrl}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }} />
                
        </>
    )

}
export default Profile;