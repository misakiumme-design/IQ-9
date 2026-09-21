const members = [
  { id: 1, name: "AIKA", group: "MAGICAL SPEC", image: "images/AIKA.JPG" },
  { id: 2, name: "ANNA", group: "MAGICAL SPEC", image: "images/ANNA.JPG" },
  { id: 3, name: "AYA", group: "MAGICAL SPEC", image: "images/AYA.JPG" },
  { id: 4, name: "KOTONE(岩本琴音)", group: "MAGICAL SPEC/トキヲイキル", image: "images/KOTONE(岩本琴音).JPG" },
  { id: 5, name: "MEI", group: "MAGICAL SPEC/トキヲイキル", image: "images/MEI.JPG" },
  { id: 6, name: "RINKA", group: "MAGICAL SPEC", image: "images/RINKA.JPG" },
  { id: 7, name: "SHIKI", group: "MAGICAL SPEC", image: "images/SHIKI.JPG" },
  { id: 8, name: "YUYU", group: "MAGICAL SPEC", image: "images/YUYU.JPG" },
  { id: 9, name: "一条虹花", group: "IQP研究生", image: "images/一条虹花.JPG" },
  { id: 10, name: "七瀬りあ", group: "IQP研究生", image: "images/七瀬りあ.JPG" },
  { id: 11, name: "伊藤麻希", group: "トキヲイキル", image: "images/伊藤麻希.jpg" },
  { id: 12, name: "優希", group: "HelloYouth", image: "images/優希.JPG" },
  { id: 13, name: "原直子", group: "トキヲイキル", image: "images/原直子.JPG" },
  { id: 14, name: "大島向葵", group: "HelloYouth", image: "images/大島向葵.JPG" },
  { id: 15, name: "大庭彩歌", group: "トキヲイキル", image: "images/obaayaka.jpg" },
  { id: 16, name: "大石芽依", group: "トキヲイキル(サポメン)", image: "images/大石芽依.JPG" },
  { id: 17, name: "大葉みらい", group: "HelloYouth", image: "images/大葉みらい.JPG" },
  { id: 18, name: "天瀬かな", group: "トキヲイキル(サポメン)", image: "images/天瀬かな.JPG" },
  { id: 19, name: "天野なつ", group: "個人", image: "images/天野なつ.JPG" },
  { id: 20, name: "宇咲妃奈乃", group: "HelloYouth", image: "images/宇咲妃奈乃.JPG" },
  { id: 21, name: "宮岡ゆあ", group: "IQP研究生", image: "images/宮岡ゆあ.JPG" },
  { id: 22, name: "岸田麻佑", group: "トキヲイキル", image: "images/岸田麻佑.JPG" },
  { id: 23, name: "平松聖菜", group: "HelloYouth", image: "images/平松聖菜.JPG" },
  { id: 24, name: "平野未季", group: "HelloYouth", image: "images/平野未季.JPG" },
  { id: 25, name: "愛実にこ", group: "IQP研究生", image: "images/愛実にこ.JPG" },
  { id: 26, name: "星乃未來", group: "IQP研究生", image: "images/星乃未來.JPG" },
  { id: 27, name: "月野杏咲", group: "IQP研究生", image: "images/月野杏咲.JPG" },
  { id: 28, name: "有村南海", group: "LinQ", image: "images/有村南海.JPG" },
  { id: 29, name: "有栖みこ", group: "IQP研究生", image: "images/有栖みこ.JPG" },
  { id: 30, name: "望月雫汐", group: "IQP研究生", image: "images/望月雫汐.JPG" },
  { id: 31, name: "松岡由莉", group: "IQP研究生", image: "images/松岡由莉.JPG" },
  { id: 32, name: "桃咲まゆ", group: "トキヲイキル", image: "images/桃咲まゆ.JPG" },
  { id: 33, name: "森斗咲羽", group: "LinQ", image: "images/森斗咲羽.JPG" },
  { id: 34, name: "槙宮令乃", group: "HelloYouth", image: "images/槙宮令乃.JPG" },
  { id: 35, name: "橘杏來", group: "LinQ", image: "images/橘杏來.JPG" },
  { id: 36, name: "櫻井かのん", group: "HelloYouth", image: "images/櫻井かのん.JPG" },
  { id: 37, name: "海月らな", group: "LinQ", image: "images/海月らな.JPG" },
  { id: 38, name: "海月らん", group: "HelloYouth", image: "images/海月らん.JPG" },
  { id: 39, name: "深瀬智聖", group: "トキヲイキル(サポメン)他", image: "images/深瀬智聖.JPG" },
  { id: 40, name: "綾乃鈴", group: "IQP研究生", image: "images/綾乃鈴.JPG" },
  { id: 41, name: "織多莉鈴", group: "LinQ", image: "images/織多莉鈴.JPG" },
  { id: 42, name: "花咲奈々未", group: "IQP研究生", image: "images/花咲奈々未.JPG" },
  { id: 43, name: "華山あかり", group: "LinQ", image: "images/華山あかり.JPG" },
  { id: 44, name: "葉月陽愛", group: "IQP研究生", image: "images/葉月陽愛.JPG" },
  { id: 45, name: "藤咲まりな", group: "トキヲイキル(サポメン)", image: "images/藤咲まりな.JPG" },
  { id: 46, name: "雪まい", group: "IQP研究生", image: "images/雪まい.JPG" },
  { id: 47, name: "黒田さい", group: "IQP研究生", image: "images/黒田さい.JPG" },
  { id: 48, name: "黒田れい", group: "LinQ", image: "images/黒田れい.JPG" }
];

const memberList = document.getElementById("member-list");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const progress = document.getElementById("progress");
const instruction = document.querySelector(".instruction");

let shuffledMembers = shuffle([...members]);

let rounds = [];
let currentRound = 0;

let selectedMembers = [];
let preliminaryWinners = [];

let mainRounds = [];
let mainRound = 0;

let mainFirst = null;
let mainSecond = null;

let phase = "preliminary";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

for (let i = 0; i < shuffledMembers.length; i += 4) {
  rounds.push(shuffledMembers.slice(i, i + 4));
}

function showRound() {
  phase = "preliminary";

  const currentMembers = rounds[currentRound];

  selectedMembers = [];

  memberList.innerHTML = "";

  progress.textContent =
    `予選 ${currentRound + 1} / ${rounds.length}`;

  instruction.textContent =
    "この中から好きな顔を最大3人選んでください";

  currentMembers.forEach(member => {
    const card = document.createElement("div");

    card.className = "member-card";
    card.dataset.id = member.id;

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <div class="member-name">${member.name}</div>
      <div class="member-group">${member.group}</div>
    `;

    card.addEventListener("click", () => {
      selectMember(member.id);
    });

    memberList.appendChild(card);
  });
}

function selectMember(id) {
  const index = selectedMembers.indexOf(id);

  if (index !== -1) {
    selectedMembers.splice(index, 1);
  } else {
    if (selectedMembers.length >= 3) {
      selectedMembers.shift();
    }

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

function startMain() {
  const shuffled = shuffle([...preliminaryWinners]);

  mainRounds = [];

  for (let i = 0; i < shuffled.length; i += 4) {
    mainRounds.push(shuffled.slice(i, i + 4));
  }

  mainRound = 0;

  showMainIntro();
}

function showMainIntro() {
  phase = "mainIntro";

  memberList.innerHTML = "";

  progress.textContent = "本選";

  instruction.textContent = "";

  const intro = document.createElement("div");

  intro.className = "main-intro";

  intro.innerHTML = `
    <h2>本選</h2>
    <p>予選を勝ち抜いたメンバーで本選を行います。</p>
    <p>4人の中から1位と2位を選んでください。</p>
  `;

  memberList.appendChild(intro);
}

function showMainRound() {
  phase = "main";

  const currentMembers = mainRounds[mainRound];

  mainFirst = null;
  mainSecond = null;

  memberList.innerHTML = "";

  progress.textContent =
    `本選 ${mainRound + 1} / ${mainRounds.length}`;

  instruction.textContent =
    "1位と2位をそれぞれ1人ずつ選んでください";

  currentMembers.forEach(member => {
    const card = document.createElement("div");

    card.className = "member-card";
    card.dataset.id = member.id;

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <div class="member-name">${member.name}</div>
      <div class="member-group">${member.group}</div>
    `;

    card.addEventListener("click", () => {
      selectMainMember(member.id);
    });

    memberList.appendChild(card);
  });
}

function selectMainMember(id) {
  if (mainFirst === id) {
    mainFirst = null;
  } else if (mainSecond === id) {
    mainSecond = null;
  } else if (mainFirst === null) {
    mainFirst = id;
  } else if (mainSecond === null) {
    mainSecond = id;
  }

  updateMainSelection();
}

function updateMainSelection() {
  document.querySelectorAll(".member-card").forEach(card => {
    const id = Number(card.dataset.id);

    card.classList.remove(
      "selected",
      "main-first",
      "main-second"
    );

    if (id === mainFirst) {
      card.classList.add("main-first");
    }

    if (id === mainSecond) {
      card.classList.add("main-second");
    }
  });
}

nextButton.addEventListener("click", () => {

  if (phase === "mainIntro") {
    showMainRound();
    return;
  }

  if (phase === "preliminary") {

    const currentMembers = rounds[currentRound];

    const winners = currentMembers.filter(member =>
      selectedMembers.includes(member.id)
    );

    preliminaryWinners.push(...winners);

    currentRound++;

    if (currentRound >= rounds.length) {
      alert("予選終了！\n\nこの後、本選に進みます。");
      startMain();
      return;
    }

    showRound();
    return;
  }

  if (phase === "main") {

    if (mainFirst === null || mainSecond === null) {
      alert("1位と2位をそれぞれ1人ずつ選んでください。");
      return;
    }

    mainRound++;

    if (mainRound >= mainRounds.length) {
      alert("本選終了！");
      return;
    }

    showMainRound();
  }
});

backButton.addEventListener("click", () => {

  if (phase === "mainIntro") {
    currentRound = rounds.length - 1;
    showRound();
    return;
  }

  if (phase === "preliminary") {

    if (currentRound <= 0) {
      return;
    }

    currentRound--;

    const previousRound = rounds[currentRound];
    const previousIds = previousRound.map(member => member.id);

    preliminaryWinners =
      preliminaryWinners.filter(member =>
        !previousIds.includes(member.id)
      );

    showRound();
    return;
  }

  if (phase === "main") {

    if (mainRound <= 0) {
      showMainIntro();
      return;
    }

    mainRound--;

    showMainRound();
  }
});

showRound();
