import Profile from "./profile/profile"
import image from "./profile/profile";

function App() {
  const handleName = (name) => {
    alert(`Profile user name is ${name}`);
  };

  return (
    <div className="App">
      <Profile
        fullName="Akinbuwa Emmanuel Olayimika"
        bio="i'm the upcoming greatest developer in the universe"
        profession="freelance full-stack software developer"
        handleName={handleName}
      >
        {image}
      </Profile>
    </div>
  );
}

export default App;