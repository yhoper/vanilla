let pollTotal = polls.length;
let myPollResponses = { user: "", options: [] };
//+++++++++++++Modal+++++++++++++
let modal = document.getElementById("jsModal");
let span = document.getElementsByClassName("close")[0];
function showModal(dataModal) {
  modal.style.display = "block";
  insertOnTagHtml(dataModal);
}
function hiddenModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//+++++++++++++Fin Modal+++++++++++++

function hiddenTagsHtml(tagID, propterty) {
  document.getElementById(tagID).style.display = propterty;
}
function showTagsHtml(tagID, propterty) {
  document.getElementById(tagID).style.display = propterty;
}

const startPoll = (userName) => {
  if (typeof userName === "string" && userName.trim().length === 0) {
    let dataModal = [
      {
        id: "modal-title",
        message: "Atención ha ocurrido un error",
      },
      {
        id: "modal-boddy",
        message:
          "El usuario no debe estár vacio por favor verifica e intenta nuevamente.",
      },
    ];
    showModal(dataModal);
    return;
  }

  //Guardamos la session
  sessionStorage.setItem("userName", userName);
  localStorage.setItem("userName", userName);
  let inputUserName = sessionStorage.getItem("userName");

  insertOnTagHtml([{ id: "fullname", message: inputUserName }]);
  searchQuestion(1);
};

function insertOnTagHtml(obj) {
  console.log(obj);
  obj.map((item) => {
    document.getElementById(item.id).innerHTML = item.message;
  });
}
insertOnTagHtml([{ id: "pollTotal", message: pollTotal }]);

//Buscamos y filtramos la pregunta
function searchQuestion(id) {
  hiddenTagsHtml("welcome", "none");
  hiddenTagsHtml("informationUser", "flex");
  polls
    .filter((poll) => poll.id === id)
    .map((resultPoll) => {
      document.getElementById("option").innerHTML = "";
      document.getElementById("question").innerHTML = resultPoll.question;
      options = resultPoll.answer;
      options.forEach((option) => {
        //Recorremos para imprimir las opcinoes
        const node = document.createElement("li");
        node.setAttribute(
          `onclick`,
          `savePollUser('${resultPoll.question}', ${option.nextquestion},  '${option.response}', ${option.finished})`
        );
        const textnode = document.createTextNode(option.response);
        node.appendChild(textnode);
        document.getElementById("option").appendChild(node);
      });
    });
}

//Guardamos la información

function savePollUser(question, nextquestion, response, finished) {
  let userLogged = sessionStorage.getItem("userName");
  myPollResponses.user = myPollResponses.user = userLogged;
  myPollResponses.options.push({
    question: question,
    nextquestion: nextquestion,
    response: response,
    finished,
  });
  console.log(myPollResponses);
  if (finished === true) {
    let dataModal = [
      {
        id: "modal-title",
        message: "Ha finalizado",
      },
      {
        id: "modal-boddy",
        message: "Gracias por participar, ha llegado al final de la entrevista",
      },
    ];
    localStorage.setItem(userLogged, JSON.stringify(myPollResponses));
    let dataPolls = JSON.parse(localStorage.getItem(userLogged));
    console.log("****", dataPolls);
    appExit();
    showModal(dataModal);
  }

  //Buscamos la siguiente pregunta
  searchQuestion(nextquestion);
}

function pagination() {}

function showAllPolls() {
  for (let [key, value] of Object.entries(localStorage)) {
    //lastUsername

    let response = JSON.parse(value);
    let resOptions = response.options;
    console.log(response);
    const lastUsername = document.createElement("li");
    lastUsername.classList.add("usernameList");
    const valueLastUsername = document.createTextNode(
      `El usuario ${response.user} respondio:`
    );
    lastUsername.appendChild(valueLastUsername);
    document.getElementById("resultList").appendChild(lastUsername);

    resOptions.forEach((item) => {
      const lastUname = document.createElement("li");
      const valueLastUname = document.createTextNode(
        `${item.question} ${item.response}`
      );
      lastUname.appendChild(valueLastUname);
      document.getElementById("resultList").appendChild(lastUname);
    });
    i = 0;
  }
}

const appExit = () => {
  console.log("Saliendo de la aplicación");
  hiddenTagsHtml("welcome", "none");
  hiddenTagsHtml("informationUser", "none"); // no quiere ocultarse
  hiddenTagsHtml("poll", "none");

  showAllPolls();
};

function appExit__() {}
