
const lifeCoachList = [
    {
        name: "Sir Shree",
        work: "Tej Guru",
        description: "The enlightend master, And founder of Tejgyan Foundation.",
        url: "http://surl.li/goxav"
    },
    {
        name: "Sandeep Maheswari",
        work: "Life Coach",
        description: "The enlightend master, And founder of Founder of ImageBazar.",
        url: "https://shorturl.at/mzGOY"
    }
]




const LifeGuru = () => {

    const clickableBtn = () => {

    }
    return (
        <>
            <button onClick={() => clickableBtn}>Next</button>
            <p></p>
            <h1>
                <i>{lifeCoachList.name}</i>

            </h1>
            <h3>  {lifeCoachList.description}</h3>
            <img src={lifeCoachList.url} alt="Image of sir shree the founder of tejgyan foundation "
                height="150" width="150" />
        </>
    )
}
export default LifeGuru;


