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

      // 通常時

      // ハズレ
      let normalLost = [];
      const normalLostSet = [0, 42253, 42214, 42171, 42130, 42082, 42031];

      // １枚役
      let oneMedal = [];
      const oneMedalSet = [0, 5904, 5904, 5904, 5904, 5904, 5904];

      // リプレイ
      let normalReplay = [];
      const normalReplaySet = [0, 8978, 8978, 8978, 8978, 8978, 8978];

      // ベル
      let normalBel = [];
      const normalBelSet = [0, 6425, 6425, 6425, 6425, 6425, 6425];

      // 弱チェリー
      let normalWeakCherry = [];
      const normalWeakCherrySet = [0, 602, 641, 681, 720, 761, 804];

      // スイカ
      let normalSuika = [];
      const normalSuikaSet = [0, 656, 656, 656, 656, 656, 656];

      // 強チェリー
      let normalStrongCherry = [];
      const normalStrongCherrySet = [0, 200, 200, 200, 200, 200, 200];

      // チャンス目A
      let normalChanceA = [];
      const normalChanceASet = [0, 298, 298, 298, 298, 298, 298];

      // チャンス目B
      let normalChanceB = [];
      const normalChanceBSet = [0, 187, 187, 187, 187, 187, 187];

      // 中段チェリー
      let normalMiddleCherry = [];
      const normalMiddleCherrySet = [0, 2, 2, 2, 2, 2, 2];

      // 単独ボーナス（紫７）
      let normalSinglePurpleBonus = [];
      const normalSinglePurpleBonusSet = [0, 10, 10, 13, 15, 22, 30];

      // 単独ボーナス（赤７）
      let normalSingleRedBonus = [];
      const normalSingleRedBonusSet = [0, 8, 8, 8, 8, 8, 8];

      // 単独ボーナス（異色）
      let normalSingleDifferentBonus = [];
      const normalSingleDifferentBonusSet = [0, 13, 13, 13, 13, 13, 13];

      // ロングフリーズ
      let longFreeze = [];
      // 単独ボーナス（赤７）の１６分の１

      // ここまで

      // 各フラグのセッティング
      const settingNormal = {
        // ハズレ
        lost(normalLost, normalLostSet, results, set) {
          let n = normalLostSet[set];
          for (i = 0; i < n; i++) {
            normalLost.push("ハズレ");
            results.push("ハズレ");
          }
        },
        // リプレイ
        replay(normalReplay, normalReplaySet, results, set) {
          let n = normalReplaySet[set];
          for (i = 0; i < n; i++) {
            normalReplay.push("リプレイ");
            results.push("リプレイ");
          }
        },
        // ベル
        bel(normalBel, normalBelSet, results, set) {
          let n = normalBelSet[set];
          for (i = 0; i < n; i++) {
            normalBel.push("ベル");
            results.push("ベル");
          }
        },
        // 弱チェリー
        WeakCherry(normalWeakCherry, normalWeakCherrySet, results, set) {
          let n = normalWeakCherrySet[set];
          for (i = 0; i < n; i++) {
            normalWeakCherry.push("弱チェリー");
            results.push("弱チェリー");
          }
        },
        // スイカ
        suika(normalSuila, normalSuikaSet, results, set) {
          let n = normalSuikaSet[set];
          for (i = 0; i < n; i++) {
            normalSuila.push("スイカ");
            results.push("スイカ");
          }
        },
        // 強チェリー
        strongCherry(normalStrongCherry, normalStrongCherrySet, results, set) {
          let n = normalStrongCherrySet[set];
          for (i = 0; i < n; i++) {
            normalStrongCherry.push("強チェリー");
            results.push("強チェリー");
          }
        },
        // チャンス目A
        chanceA(normalChanceA, normalChanceASet, results, set) {
          let n = normalChanceASet[set];
          for (i = 0; i < n; i++) {
            normalChanceA.push("チャンス目A");
            results.push("チャンス目A");
          }
        },
        // チャンス目B
        chanceB(normalChanceB, normalChanceBSet, results, set) {
          let n = normalChanceBSet[set];
          for (i = 0; i < n; i++) {
            normalChanceB.push("チャンス目B");
            results.push("チャンス目B");
          }
        },
        // 中段チェリー
        middleCherry(normalMiddleCherry, normalMiddleCherrySet, results, set) {
          let n = normalMiddleCherrySet[set];
          for (i = 0; i < n; i++) {
            normalMiddleCherry.push("中段チェリー");
            results.push("中段チェリー");
          }
        },
        // 単独ボーナス（紫７）
        singlePurpleBonus(
          normalSinglePurpleBonus,
          normalSinglePurpleBonusSet,
          results,
          set
        ) {
          let n = normalSinglePurpleBonusSet[set];
          for (i = 0; i < n; i++) {
            normalSinglePurpleBonus.push("単独ボーナス（紫七）");
            results.push("単独ボーナス（紫七）");
          }
        },
        // 単独ボーナス（赤７）
        singleRedBonus(
          normalSingleRedBonus,
          normalSingleRedBonusSet,
          results,
          set
        ) {
          let n = normalSingleRedBonusSet[set];
          for (i = 0; i < n; i++) {
            normalSingleRedBonus.push("単独ボーナス（赤七）");
            results.push("単独ボーナス（赤七）");
          }
        },
        // 単独ボーナス（異色）
        singleDifferentBonus(
          normalSingleDifferentBonus,
          normalSingleDifferentBonusSet,
          results,
          set
        ) {
          let n = normalSingleDifferentBonusSet[set];
          for (i = 0; i < n; i++) {
            normalSingleDifferentBonus.push("単独ボーナス（異色）");
            results.push("単独ボーナス（異色）");
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

      // 通常時の各フラグの設定を変数resultsへ格納する
      // (ハズレ、リプレイ、ベル、弱チェリー、スイカ、強チェリー、チャンス目A、チャンス目B、中段チェリー、単独ボーナス（紫七）、単独ボーナス（赤七)、単独ボーナス（異色））
      settingNormal.lost(normalLost, normalLostSet, results, set);
      settingNormal.replay(normalReplay, normalReplaySet, results, set);
      settingNormal.bel(normalBel, normalBelSet, results, set);
      settingNormal.WeakCherry(
        normalWeakCherry,
        normalWeakCherrySet,
        results,
        set
      );
      settingNormal.suika(normalSuika, normalSuikaSet, results, set);
      settingNormal.strongCherry(
        normalStrongCherry,
        normalStrongCherrySet,
        results,
        set
      );
      settingNormal.chanceA(normalChanceA, normalChanceASet, results, set);
      settingNormal.chanceB(normalChanceB, normalChanceBSet, results, set);
      settingNormal.middleCherry(
        normalMiddleCherry,
        normalMiddleCherrySet,
        results,
        set
      );
      settingNormal.singlePurpleBonus(
        normalSinglePurpleBonus,
        normalSinglePurpleBonusSet,
        results,
        set
      );
      settingNormal.singleRedBonus(
        normalSingleRedBonus,
        normalSingleRedBonusSet,
        results,
        set
      );
      settingNormal.singleDifferentBonus(
        normalSingleDifferentBonus,
        normalSingleDifferentBonusSet,
        results,
        set
      );

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
      let resultMedals = [0];

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

        resultMedals.push(medal);
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

      // スランプグラフ
      Highcharts.chart("container", {
        title: {
          text: "スランプグラフ",
        },

        subtitle: {
          text: "魔法少女まどかマギカ２",
        },

        yAxis: {
          title: {
            text: "差枚数",
          },
        },

        // xAxis: {
        //   accessibility: {
        //     rangeDescription: "？？？",
        //   },
        // },

        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "long",
        },

        plotOptions: {
          series: {
            label: {
              connectorAllowed: true,
            },
            pointStart: 0,
          },
        },

        series: [
          {
            name: "コイン（枚）",
            data: resultMedals,
          },
          // {
          //   name: "Manufacturing",
          //   data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
          // },
          // {
          //   name: "Sales & Distribution",
          //   data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
          // },
          // {
          //   name: "Project Development",
          //   data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
          // },
          // {
          //   name: "Other",
          //   data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
          // },
        ],

        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom",
                },
              },
            },
          ],
        },
      });
      // グラフーここまで

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
      // console.log(resultMedals);

      // 演算
    } else {
      console.log("エラー");

      error.textContent = "エラー";
      error.style = "display: block;";
    }
  };
});
