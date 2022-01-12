const personInTeam = document.querySelectorAll(".team-person");

function openResume() {
  personInTeam.forEach((element) => {
    const resume = element.getElementsByClassName("team-resume");
    console.log(resume);

    element.addEventListener("click", () => {
      resume[0].classList.toggle("opened");
    });
  });
}

openResume();
