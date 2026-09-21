const members = [
  { id: 1, name: "メンバー01", image: "images/01.jpg" },
  { id: 2, name: "メンバー02", image: "images/02.jpg" },
  { id: 3, name: "メンバー03", image: "images/03.jpg" },
  { id: 4, name: "メンバー04", image: "images/04.jpg" },
  { id: 5, name: "メンバー05", image: "images/05.jpg" },
  { id: 6, name: "メンバー06", image: "images/06.jpg" },
  { id: 7, name: "メンバー07", image: "images/07.jpg" },
  { id: 8, name: "メンバー08", image: "images/08.jpg" },
  { id: 9, name: "メンバー09", image: "images/09.jpg" },
  { id: 10, name: "メンバー10", image: "images/10.jpg" },
  { id: 11, name: "メンバー11", image: "images/11.jpg" },
  { id: 12, name: "メンバー12", image: "images/12.jpg" },
  { id: 13, name: "メンバー13", image: "images/13.jpg" },
  { id: 14, name: "メンバー14", image: "images/14.jpg" },
  { id: 15, name: "メンバー15", image: "images/15.jpg" },
  { id: 16, name: "メンバー16", image: "images/16.jpg" },
  { id: 17, name: "メンバー17", image: "images/17.jpg" },
  { id: 18, name: "メンバー18", image: "images/18.jpg" },
  { id: 19, name: "メンバー19", image: "images/19.jpg" },
  { id: 20, name: "メンバー20", image: "images/20.jpg" },
  { id: 21, name: "メンバー21", image: "images/21.jpg" },
  { id: 22, name: "メンバー22", image: "images/22.jpg" },
  { id: 23, name: "メンバー23", image: "images/23.jpg" },
  { id: 24, name: "メンバー24", image: "images/24.jpg" },
  { id: 25, name: "メンバー25", image: "images/25.jpg" },
  { id: 26, name: "メンバー26", image: "images/26.jpg" },
  { id: 27, name: "メンバー27", image: "images/27.jpg" },
  { id: 28, name: "メンバー28", image: "images/28.jpg" },
  { id: 29, name: "メンバー29", image: "images/29.jpg" },
  { id: 30, name: "メンバー30", image: "images/30.jpg" },
  { id: 31, name: "メンバー31", image: "images/31.jpg" },
  { id: 32, name: "メンバー32", image: "images/32.jpg" },
  { id: 33, name: "メンバー33", image: "images/33.jpg" },
  { id: 34, name: "メンバー34", image: "images/34.jpg" },
  { id: 35, name: "メンバー35", image: "images/35.jpg" },
  { id: 36, name: "メンバー36", image: "images/36.jpg" },
  { id: 37, name: "メンバー37", image: "images/37.jpg" },
  { id: 38, name: "メンバー38", image: "images/38.jpg" },
  { id: 39, name: "メンバー39", image: "images/39.jpg" },
  { id: 40, name: "メンバー40", image: "images/40.jpg" },
  { id: 41, name: "メンバー41", image: "images/41.jpg" },
  { id: 42, name: "メンバー42", image: "images/42.jpg" },
  { id: 43, name: "メンバー43", image: "images/43.jpg" },
  { id: 44, name: "メンバー44", image: "images/44.jpg" },
  { id: 45, name: "メンバー45", image: "images/45.jpg" },
  { id: 46, name: "メンバー46", image: "images/46.jpg" }
];

const memberList = document.getElementById("member-list");
const nextButton = document.getElementById("next-button");
const progress = document.getElementById("progress");

let shuffledMembers = shuffle([...members]);
let rounds = [];
let currentRound = 0;
let selectedMembers = [];

// 46人をランダムに並べる
// 最初の44人 → 4人ずつ11画面
for (let i = 0; i < 44; i += 4) {
  rounds.push(shuffledMembers.slice(i, i + 4));
}

// 残った2人
const lastTwo = shuffledMembers.slice(44);

// ここまでの44人からランダムに2人を追加
const randomTwo = shuffle(shuffledMembers.slice(0, 44)).slice(0, 2);

// 最後も4人
rounds.push([...lastTwo, ...randomTwo]);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function showRound() {
  const currentMembers = rounds[currentRound];

  selectedMembers = [];

  memberList.innerHTML = "";

  progress.textContent =
    `予選 ${currentRound + 1} / ${rounds.length}`;

  currentMembers.forEach(member => {
    const card = document.createElement("div");

    card.className = "member-card";
    card.dataset.id = member.id;

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <div class="member-name">${member.name}</div>
    `;

    card.addEventListener("click", () => {
      selectMember(member.id);
    });

    memberList.appendChild(card);
  });
}

function selectMember(id) {
  const index = selectedMembers.indexOf(id);

  // すでに選択されていたら解除
  if (index !== -1) {
    selectedMembers.splice(index, 1);
    updateSelection();
    return;
  }

  // 3人未満なら追加
  if (selectedMembers.length < 3) {
    selectedMembers.push(id);
  } else {
    // 3人選択済みなら、一番最初に選んだ人と入れ替える
    selectedMembers.shift();
    selectedMembers.push(id);
  }

  updateSelection();
}

function updateSelection() {
  document.querySelectorAll(".member-card").forEach(card => {
    const id = Number(card.dataset.id);

    card.classList.toggle(
      "selected",
      selectedMembers.includes(id)
    );
  });
}

nextButton.addEventListener("click", () => {
  currentRound++;

  if (currentRound >= rounds.length) {
    alert("予選終了！\n\nここから本選を作ります。");
    return;
  }

  showRound();
});

// 最初の画面を表示
showRound();
