
const data = 
{
  "id": 1,
  "result":"1",
  "data":{
    "first_num":"1",
    "team_list": []
  }
}

let teams = [];
let maxMember = 50;
let maxTeam = 20;
let newTeam;
let randomMember;
for (let i = 0; i < Math.floor(Math.random() * (maxTeam + 1)); i++) {
  randomMember = Math.floor(Math.random() * (maxMember + 1));

  newTeam = {
    "teamName":"隨機隊伍" + i,
    "teamRank": i ,
    "teamLength": randomMember ,
    "teamData": []
  }

  for(let j = 0; j < randomMember; j++){
    newTeam.team_data.push(
      {
        "teamName":"隨機隊伍" + i,
        "message":"hi~ " + j,
        "bodyId": Math.floor(Math.random() * 10 + 1),
        "headLink": "/upload/",
        "order": i * j + j 
      }
    )
  }

  teams.push(newTeam);
}

data.data.team_list = teams;
module.exports = () => {

  var origin = {};
  return {
    productList: data
  }
}