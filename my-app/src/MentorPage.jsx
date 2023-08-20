
const mentor = {
    name: "Tanay Pratap",
    imageUrl: "https://pbs.twimg.com/profile_images/1597211549021908994/V2ClCtWn_400x400.jpg",
    imageSize: 190,
  };
  
const MyMentor = () => {
    return (
      <>
       <div className="container">
          <h1 className="heading">My Mentor</h1>
          <div id="div-img">
          <img className="mentorImg"
          src={mentor.imageUrl}
          alt={"Photo of" + mentor.name}
          style={{
            width: mentor.imageSize,
            height: mentor.imageSize,
        }}
  
      />
            
          </div>
      
        <h2>About My mentor</h2>
        <h3>Given below is Tanay Pratap said about himself</h3>
        <p>I have spent my entire life working as an engineer and moonlighting as a teacher. I resigned from my position as a Sr. Software Engineer at Microsoft because I believe education is still an unsolved problem, and I am now totally dedicated to ensuring that everyone can access education, not just the wealthy few. I'm working on implementing the tried and testing model of closing the skill gap between technical and engineering roles into non-technical and business roles.
  
          I believe that your work should become your degree, and your craft should become your credentials. So, currently working on providing students with a curriculum of proof of work and industry-focused courses in an affordable and accessible manner through Invact. Want to know how? It's a long story, so follow me to learn more. I am telling it in parts every day.</p>
          <h1>Given below is my place:</h1>
      <h2>{mentor.name}</h2>
       
          </div>
      
            
      </>
    )
  }
  export default MyMentor; 
  const MyPlace = () => {
    return (
      <>
        <h1>Given below is my place:</h1>
        <h2>{mentor.name}</h2>
        <img className="mentorImg"
          src={mentor.imageUrl}
          alt={"Photo of" + mentor.name}
          style={{
            width: mentor.imageSize,
            height: mentor.imageSize,
            
          }}
  
        />
    
      </>
    )
  }
  
  const products =[
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  
  const ShoppingList = () =>{
    const listItems = products.map(currentElm =>
      <li>
        {currentElm.title}
      </li>
      )
  }