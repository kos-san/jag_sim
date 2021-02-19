let set = 0;
let total_game = 0;

window.addEventListener("load", function () {
  // console.log("load：リソースファイルを全て読み込みました。");

  document.getElementById("set_1").onclick = function () {
    set = 1;
    document.getElementById("set_num").textContent = "1";
  };

  document.getElementById("set_2").onclick = function () {
    set = 2;
    document.getElementById("set_num").textContent = "2";
  };

  document.getElementById("set_3").onclick = function () {
    set = 3;
    document.getElementById("set_num").textContent = "3";
  };

  document.getElementById("set_4").onclick = function () {
    set = 4;
    document.getElementById("set_num").textContent = "4";
  };

  document.getElementById("set_5").onclick = function () {
    set = 5;
    document.getElementById("set_num").textContent = "5";
  };

  document.getElementById("set_6").onclick = function () {
    set = 6;
    document.getElementById("set_num").textContent = "6";
  };

  const form = document.getElementById("start-form");
  form.addEventListener("click", function () {
    const input_value = document.getElementById("total-game");
    input_value.addEventListener("input", () => {
      total_game = input_value.value;
      total_game = parseInt(total_game);
      // console.log(total_game > 0);
      // console.log(total_game)
    });
  });

  document.getElementById("start").onclick = () => {
    const elementSet = [
      "bb_count",
      "reg_count",
      "bonus_sum",
      "total_medal",
      "big_pro",
      "reg_pro",
    ];

    elementSet.forEach((t) => {
      document.getElementById(`${t}`).textContent = "演算中...";
    });

    const error = document.getElementById("error");
    const hidden = [
      document.getElementById("hidden1"),
      document.getElementById("hidden2"),
      document.getElementById("hidden3"),
    ];
    const sumError = document.getElementById("sum_error");
    sumError.style = "display: none;";
    if (set > 0 && total_game > 0) {
      document.getElementById("out-game").textContent = `${total_game}回転`;
      error.style = "display: none;";

      // 演算

      let results = [];

      let big = [];
      const big_set = [0, 160, 164, 164, 168, 168, 172];

      let cherry_big = [];
      const cherry_big_set = [0, 68, 68, 68, 72, 72, 72];

      let reg = [];
      const reg_set = [0, 100, 104, 132, 144, 172, 172];

      let cherry_reg = [];
      const cherry_reg_set = [0, 44, 44, 56, 60, 72, 72];

      let grape = [];
      const grape_set = [0, 10099, 10099, 10099, 10099, 10099, 10599];

      let replay = [];
      const replay_set = 8980;

      let cherry = [];
      const cherry_set = 1968;

      let pielo = [];
      const pielo_set = 60;

      let bel = [];
      const bel_set = 60;

      let lost = [];
      const lost_set = [0, 43997, 43989, 43949, 43925, 43885, 43381];

      // 各フラグのセッティング
      const setting = {
        big(big, big_set, results, set) {
          let n = big_set[set];
          for (i = 0; i < n; i++) {
            big.push("big");
            results.push("big");
          }
        },
        cherry_big(cherry_big, cherry_big_set, results, set) {
          let n = cherry_big_set[set];
          for (i = 0; i < n; i++) {
            cherry_big.push("cherry_big");
            results.push("cherry_big");
          }
        },
        reg(reg, reg_set, results, set) {
          let n = reg_set[set];
          for (i = 0; i < n; i++) {
            reg.push("reg");
            results.push("reg");
          }
        },
        cherry_reg(cherry_reg, cherry_reg_set, results, set) {
          let n = cherry_reg_set[set];
          for (i = 0; i < n; i++) {
            cherry_reg.push("cherry_reg");
            results.push("cherry_reg");
          }
        },
        grape(grape, grape_set, results, set) {
          let n = grape_set[set];
          for (i = 0; i < n; i++) {
            grape.push("grape");
            results.push("grape");
          }
        },
        replay(replay, replay_set, results) {
          let n = replay_set;
          for (i = 0; i < n; i++) {
            replay.push("replay");
            results.push("replay");
          }
        },
        cherry(cherry, cherry_set, results) {
          let n = cherry_set;
          for (i = 0; i < n; i++) {
            cherry.push("cherry");
            results.push("cherry");
          }
        },
        pielo(pielo, pielo_set, results) {
          let n = pielo_set;
          for (i = 0; i < n; i++) {
            pielo.push("pielo");
            results.push("pielo");
          }
        },
        bel(bel, bel_set, results) {
          let n = bel_set;
          for (i = 0; i < n; i++) {
            bel.push("bel");
            results.push("bel");
          }
        },
        lost(lost, lost_set, results, set) {
          let n = lost_set[set];
          for (i = 0; i < n; i++) {
            lost.push("lost");
            results.push("lost");
          }
        },
      };
      // 配列の要素をシャッフルする関数の設定
      const shuffle = (arrays) => {
        for (let i = arrays.length - 1; i >= 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var tmp = arrays[i];
          arrays[i] = arrays[j];
          arrays[j] = tmp;
        }
        return arrays;
      };

      setting.lost(lost, lost_set, results, set);
      setting.big(big, big_set, results, set);
      setting.cherry_big(cherry_big, cherry_big_set, results, set);
      setting.reg(reg, reg_set, results, set);
      setting.cherry_reg(cherry_reg, cherry_reg_set, results, set);
      setting.grape(grape, grape_set, results, set);
      setting.replay(replay, replay_set, results);
      setting.cherry(cherry, cherry_set, results);
      setting.pielo(pielo, pielo_set, results);
      setting.bel(bel, bel_set, results);

      results = shuffle(results);

      // console.log(results);

      // フラグ作成
      let max_i = 1;
      let l = 1;
      let big_count = 0;
      let reg_count = 0;
      let jag_ren = 0;
      let medal = 0;
      let max_medal = 0;
      let min_medal = 0;
      let randomNumbers = [];

      function randomInt(num, randomNumbers) {
        var rand = Math.floor(Math.random() * num);
        randomNumbers.push(rand);
        return rand;
      }

      for (i = 1; i <= total_game; i++) {
        medal -= 3;

        if (l > max_i) {
          max_i = l;
        }

        let randomNum = randomInt(65536, randomNumbers);
        result = results[randomNum];
        if (result === "big") {
          console.log(`${l}回転目：BIG`);
          big_count++;
          if (l <= 100) {
            jag_ren++;
          }

          l = 0;
          medal += 345;
        } else if (result === "cherry_big") {
          console.log(`${l}回転目：チェリーBIG`);
          big_count++;
          if (l <= 100) {
            jag_ren++;
          }
          l = 0;
          medal += 345;
        } else if (result === "reg") {
          console.log(`${l}回転目：REG`);
          reg_count++;

          if (l <= 100) {
            jag_ren++;
          }
          l = 0;
          medal += 105;
        } else if (result === "cherry_reg") {
          console.log(`${l}回転目：チェリーREG`);
          reg_count++;

          if (l <= 100) {
            jag_ren++;
          }
          l = 0;
          medal += 105;
        } else if (result === "replay") {
          medal += 3;
          l++;
        } else if (result === "grape") {
          medal += 7;
          l++;
        } else if (result === "cherry") {
          medal++;
          l++;
        } else if (result === "pielo") {
          medal += 10;
          l++;
        } else if (result === "bel") {
          medal += 15;
          l++;
        } else {
          l += 1;
        }
        if (medal > max_medal) {
          max_medal = medal;
        } else if (medal < min_medal) {
          min_medal = medal;
        }
      }

      // 結果ログ
      if (big_count > 0 && reg_count > 0) {
        let big_pro = Math.floor(total_game / big_count);
        let reg_pro = Math.floor(total_game / reg_count);
        // 合算 = (BIG確率 * REG確率) / (BIG確率 + REG確率)
        let sum = Math.floor((big_pro * reg_pro) / (big_pro + reg_pro));

        // ブラウザーコンソールデバッグ用
        // console.log("終了");
        // console.log("----------------");
        // console.log(
        //   `設定：${set} 回転数：${total_game} 最大ハマり回数：${max_i}回`
        // );
        // console.log(`BIG:${big_count}回 => ${big_pro}分の１`);
        // console.log(`REG:${reg_count}回 => ${reg_pro}分の１`);
        // console.log(`合算:${sum}`);

        const iAe = [big_count, reg_count, sum, medal, big_pro, reg_pro];
        let iAeNum = 0;
        hidden.forEach((hidden) => {
          hidden.style = "display:inline;";
        });

        elementSet.forEach((t) => {
          document.getElementById(t).textContent = iAe[iAeNum];
          iAeNum++;
        });
        if (medal < 0) {
          document.getElementById("total_medal").style = "color: red;";
        } else {
          document.getElementById("total_medal").style = "color: black;";
        }
      } else {
        const sumErrorMessage = "データが少なすぎるため、解析できませんでした";

        sumError.style = "display: block;";
        sumError.textContent = sumErrorMessage;
      }

      // デバッグ用
      // console.log(`差枚数:${medal}枚`);
      // console.log(`ジャグ連回数: ${jag_ren}`);
      // console.log(`最大枚数；${max_medal}`);
      // console.log(`最低枚数：${min_medal}`);
      // console.log(
      //   set,
      //   big.length,
      //   cherry_big.length,
      //   reg.length,
      //   cherry_reg.length,
      //   replay.length,
      //   cherry.length,
      //   pielo.length,
      //   bel.length,
      //   grape.length
      // );
      // console.log(results);
      // console.log(randomNumbers);

      // 演算
    } else {
      console.log("エラー");

      error.textContent = "エラー";
      error.style = "display: block;";
    }
  };
});
