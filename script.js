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
  { id: 11, name: "伊藤麻希", group: "トキヲイキル", image: "images/itomaki.jpg" },
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

let rounds = [];
let currentRound = 0;

let selectedMembers = [];
let preliminaryWinners = [];

let mainRounds = [];
let mainRound = 0;

let mainFirst = null;
let mainSecond = null;
let mainScores = {};

let finalCandidates = [];
let finalPairs = [];
let finalPairIndex = 0;
let finalWins = {};

let phase = "top";

const FINAL_MATCHES = 24;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledMembers = shuffle([...members]);

for (let i = 0; i < shuffledMembers.length; i += 4) {
  rounds.push(shuffledMembers.slice(i, i + 4));
}

function showTopPage() {
  phase = "top";

  memberList.innerHTML = "";
  progress.textContent = "";
  instruction.textContent = "";

  nextButton.style.display = "none";
  backButton.style.display = "none";

  const page = document.createElement("div");
  page.className = "top-page";

  page.innerHTML = `
    <h2>IQP好き顔9</h2>
    <p>あなたの好きな「顔」を9人選ぼう。</p>
    <p>概ねIQPオフィシャルHP引用(ご都合メンバー有)</p>
    <button class="start-button" id="start-button">スタート</button>
  `;

  memberList.appendChild(page);

  document.getElementById("start-button").onclick = function() {
    showStartPage();
  };
}

function showStartPage() {
  phase = "start";

  memberList.innerHTML = "";
  progress.textContent = "";
  instruction.textContent = "";

  const page = document.createElement("div");
  page.className = "start-page";

  page.innerHTML = `
    <h2>準備はOK？</h2>
    <p>
      まずは予選からスタートします。<br>
      4人ずつ表示される中から<br>
      好きな顔を最大3人選んでください。
    </p>
    <button class="start-button" id="begin-button">予選を始める</button>
  `;

  memberList.appendChild(page);

  document.getElementById("begin-button").onclick = function() {
    nextButton.style.display = "";
    backButton.style.display = "";
    showRound();
  };
}

function showRound() {
  phase = "preliminary";
  selectedMembers = [];

  memberList.innerHTML = "";

  progress.textContent =
    `予選 ${currentRound + 1} / ${rounds.length}`;

  instruction.textContent =
    "この中から好きな顔を最大3人選んでください";

  nextButton.style.display = "";
  backButton.style.display = "";

  rounds[currentRound].forEach(member => {
    const card = document.createElement("div");

    card.className = "member-card";
    card.dataset.id = member.id;

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <div class="member-name">${member.name}</div>
      <div class="member-group">${member.group}</div>
    `;

    card.onclick = function() {
      selectMember(member.id);
    };

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
  const pool = [];

  preliminaryWinners.forEach(member => {
    if (!pool.some(existing => existing.id === member.id)) {
      pool.push(member);
    }
  });

  if (pool.length < 4) {
    alert("予選通過者が4人未満のため、本選を開始できません。");
    return;
  }

  mainRounds = [];

  for (let i = 0; i < 15; i++) {
    const group = shuffle([...pool]).slice(0, 4);
    mainRounds.push(group);
  }

  mainScores = {};

  pool.forEach(member => {
    mainScores[member.id] = 0;
  });

  mainRound = 0;

  showMainIntro();
}

function showMainIntro() {
  phase = "mainIntro";

  memberList.innerHTML = "";

  progress.textContent = "本選";
  instruction.textContent = "";

  nextButton.style.display = "";
  backButton.style.display = "";

  const intro = document.createElement("div");

  intro.className = "main-intro";

  intro.innerHTML = `
    <h2>本選</h2>
    <p>予選を勝ち抜いたメンバーで本選を行います。</p>
    <p>4人の中から1位と2位を選んでください。</p>
    <p><strong>全15ラウンド</strong></p>
  `;

  memberList.appendChild(intro);
}

function showMainRound() {
  phase = "main";

  mainFirst = null;
  mainSecond = null;

  memberList.innerHTML = "";

  progress.textContent =
    `本選 ${mainRound + 1} / ${mainRounds.length}`;

  instruction.textContent =
    "1位と2位をそれぞれ1人ずつ選んでください";

  nextButton.style.display = "";
  backButton.style.display = "";

  mainRounds[mainRound].forEach(member => {
    const card = document.createElement("div");

    card.className = "member-card";
    card.dataset.id = member.id;

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <div class="member-name">${member.name}</div>
      <div class="member-group">${member.group}</div>
    `;

    card.onclick = function() {
      selectMainMember(member.id);
    };

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

    card.classList.remove("main-first", "main-second");

    const oldRank = card.querySelector(".main-rank");

    if (oldRank) {
      oldRank.remove();
    }

    if (id === mainFirst) {
      card.classList.add("main-first");

      const rank = document.createElement("div");
      rank.className = "main-rank";
      rank.textContent = "🥇 1位";

      card.prepend(rank);
    }

    if (id === mainSecond) {
      card.classList.add("main-second");

      const rank = document.createElement("div");
      rank.className = "main-rank";
      rank.textContent = "🥈 2位";

      card.prepend(rank);
    }
  });
}

function startFinal() {
  const unique = [];

  mainRounds.forEach(round => {
    round.forEach(member => {
      if (!unique.some(existing => existing.id === member.id)) {
        unique.push(member);
      }
    });
  });

  const scored = unique
    .map(member => ({
      member: member,
      score: mainScores[member.id] || 0
    }))
    .sort((a, b) => b.score - a.score);

  finalCandidates = scored
    .slice(0, 12)
    .map(item => item.member);

  finalWins = {};

  finalCandidates.forEach(member => {
    finalWins[member.id] = 0;
  });

  const allPairs = [];

  for (let i = 0; i < finalCandidates.length; i++) {
    for (let j = i + 1; j < finalCandidates.length; j++) {
      allPairs.push([
        finalCandidates[i],
        finalCandidates[j]
      ]);
    }
  }

  finalPairs = shuffle(allPairs).slice(
    0,
    Math.min(FINAL_MATCHES, allPairs.length)
  );

  finalPairIndex = 0;

  showFinalIntro();
}

function showFinalIntro() {
  phase = "finalIntro";

  memberList.innerHTML = "";

  progress.textContent = "決勝";
  instruction.textContent = "";

  nextButton.style.display = "";
  backButton.style.display = "";

  const intro = document.createElement("div");

  intro.className = "main-intro";

  intro.innerHTML = `
    <h2>決勝</h2>
    <p>ここからは二者択一です。</p>
    <p>2人のうち、より好きな顔を1人選んでください。</p>
    <p><strong>${finalCandidates.length}人・全${finalPairs.length}対戦</strong></p>
  `;

  memberList.appendChild(intro);
}

function showFinalPair() {
  phase = "final";

  const pair = finalPairs[finalPairIndex];

  memberList.innerHTML = "";

  progress.textContent =
    `決勝 ${finalPairIndex + 1} / ${finalPairs.length}`;

  instruction.textContent =
    "より好きな顔を1人選んでください";

  nextButton.style.display = "none";
  backButton.style.display = "none";

  pair.forEach(member => {
    const card = document.createElement("div");

    card.className = "member-card";
    card.dataset.id = member.id;

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <div class="member-name">${member.name}</div>
      <div class="member-group">${member.group}</div>
    `;

    card.onclick = function() {
      selectFinalWinner(member.id);
    };

    memberList.appendChild(card);
  });
}

function selectFinalWinner(id) {
  finalWins[id]++;

  finalPairIndex++;

  if (finalPairIndex >= finalPairs.length) {
    showFinalRanking();
    return;
  }

  showFinalPair();
}

function showFinalRanking() {
  phase = "result";

  memberList.innerHTML = "";

  progress.textContent = "好き顔9";

  instruction.textContent =
    "あなたの好き顔ランキング TOP9";

  const ranking = [...finalCandidates].sort(
    (a, b) => finalWins[b.id] - finalWins[a.id]
  );

  const result = document.createElement("div");

  result.className = "ranking-list";

  ranking.slice(0, 9).forEach((member, index) => {
    const item = document.createElement("div");

    item.className = "ranking-item";

    item.innerHTML = `
      <div class="ranking-number">${index + 1}位</div>
      <img src="${member.image}" alt="${member.name}">
      <div>
        <div class="ranking-name">${member.name}</div>
        <div class="ranking-group">${member.group}</div>
      </div>
      <div class="ranking-wins">${finalWins[member.id]}勝</div>
    `;

    result.appendChild(item);
  });

  memberList.appendChild(result);

  nextButton.style.display = "none";
  backButton.style.display = "none";
}

nextButton.addEventListener("click", () => {

  if (phase === "mainIntro") {
    showMainRound();
    return;
  }

  if (phase === "finalIntro") {
    showFinalPair();
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
      alert(
        "1位と2位をそれぞれ1人ずつ選んでください。"
      );
      return;
    }

    mainScores[mainFirst]++;
    mainScores[mainSecond]++;

    mainRound++;

    if (mainRound >= mainRounds.length) {
      alert("本選終了！\n\nこの後、決勝に進みます。");
      startFinal();
      return;
    }

    showMainRound();
    return;
  }
});

backButton.addEventListener("click", () => {

  if (phase === "top") {
    return;
  }

  if (phase === "start") {
    showTopPage();
    return;
  }

  if (phase === "mainIntro") {
    currentRound = rounds.length - 1;
    showRound();
    return;
  }

  if (phase === "preliminary") {

    if (currentRound <= 0) {
      showStartPage();
      return;
    }

    currentRound--;

    const previousRound = rounds[currentRound];

    const previousIds =
      previousRound.map(member => member.id);

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
    return;
  }
});

showTopPage();
