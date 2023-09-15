// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "osg-nback-number-task",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "OSG Nback number task",
    "description": "",
    "repository": "",
    "contributors": "Takayuki Osugi"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "fullscreen",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "この実験はフルスクリーンで行います。",
          "hint": "フルスクリーンにするために，ここをクリックしてください。",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "本実験・調査の実施責任者は岐阜大学教育学部学校教育講座心理学コース4回生の水谷百恵です。\n本実験・調査の参加はあなたの任意によるものです。",
              "title": "本実験・調査について"
            },
            {
              "required": true,
              "type": "text",
              "title": "1. 本実験・調査の目的",
              "content": "この実験は大学生の創造性と認知処理の正確さを測定することが目的です。\n"
            },
            {
              "required": true,
              "type": "text",
              "title": "2. 本実験・調査の手続き",
              "content": "もし、あなたが本実験・調査に参加した場合、あなたは創造性課題と，認知課題に取り組んでいただきます。\nこの実験・調査の所要時間は約30分程度です。"
            },
            {
              "required": true,
              "type": "text",
              "title": "3. 潜在的なリスク・苦痛など",
              "content": "実験による多少の疲労は除き、潜在的なリスクや苦痛はありません。\nまた、いつ、いかなる理由でも、自由に実験を中止していただけます (6.参加と中止もご参照ください。) 。"
            },
            {
              "required": true,
              "type": "text",
              "title": "4.参加による利益",
              "content": "あなたが本実験・調査に参加されることで心理学の研究の発展に繋がります。"
            },
            {
              "required": true,
              "type": "text",
              "title": "5. 匿名性の確保",
              "content": "本実験・調査によって得られた情報は法律による開示請求を除き、匿名性が維持されます。匿名性は実験参加者番号の付与、統計的解析によって保たれます。収集されたデータは個人が特定できるデータが公表されることは決してありません。二次分析などのため個人を特定できない形で個人データを公開する場合があります。加えて、統計的に処理されたデータを学会発表や論文として公表する場合があります。"
            },
            {
              "required": true,
              "type": "text",
              "title": "6. 参加と中止",
              "content": "あなたは本実験・調査への参加もしくは不参加を自由に選択できます。また、参加した場合でも、いつでも、どのような理由でも、途中で実験・調査を中止することができます。もし、途中で実験・調査を中止したくなった場合は、「ESCキー」を押した後、ウィンドウを閉じることで実験・調査を中止できます。"
            },
            {
              "required": true,
              "type": "text",
              "title": "7. 実験・調査実施者への問い合わせ",
              "content": "本実験・調査に対して質問がある場合は、実施責任者にお問い合わせください。"
            },
            {
              "required": true,
              "type": "checkbox",
              "label": "実験・調査への参加に同意いただけますか？同意いただける方はチェックをお願いします。同意いただけない方は、ESCを押した後、ウィンドウを閉じて下さい。",
              "options": [
                {
                  "label": "上記の説明をよく読み、理解した上で、実験・調査への参加に同意します。",
                  "coding": "informedConsent"
                }
              ],
              "name": "esc"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "始める →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "informedConsent"
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence0",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "text",
                  "title": "実験を始めます。この実験は，パソコンの画面と，私の指示によって進めていきます。",
                  "content": ""
                },
                {
                  "type": "text",
                  "title": "まず始めに，創造性課題を行います。",
                  "content": "日常で使う「物」が，画面上に表示されます。その「物」の通常とは異なる使い方を，制限時間内にできるだけ多く，手元にある紙に書いてください。"
                },
                {
                  "required": true,
                  "type": "text",
                  "title": "まず始めに，練習試行を始めます。",
                  "content": "練習試行の制限時間は30秒です。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "練習試行の回答を始める →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "task "
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 160,
                  "height": 45.2,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "紙コップ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "40",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "task practice",
              "timeout": "30000"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "text",
                  "content": "先ほどの練習と同様，日常で使う「物」が，画面上に表示されます。その「物」の通常とは異なる使い方を，制限時間内にできるだけ多く，手元にある紙に書いてください。制限時間は2分間です。",
                  "title": "次に本試行の1題目を始めます。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "回答を始める →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "task1 explanation"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 120,
                  "height": 45.2,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "レンガ",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "40",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "task1",
              "timeout": "120000"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "次に本試行の2題目を始めます。",
                  "content": "先ほどと同様，日常で使う「物」が，画面上に表示されます。その「物」の通常とは異なる使い方を，制限時間内にできるだけ多く，手元にある紙に書いてください。制限時間は2分間です。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "回答を始める →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "task2 explanation"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 2,
                  "height": 45.2,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "40",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 128,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "段ボール",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "task2",
              "timeout": "120000"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "これで創造性課題は終わります。次の課題に移ります。"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "explanation next "
            }
          ]
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "この実験では画面の中央に赤色または黒色の数字が呈示されます。黒色の数字が呈示されている間は，無視してください。赤色の数字が呈示されたら，その数字が奇数であれば「奇キー(Fキー）」を，偶数であれば「偶キー（Jキー）」を押してください。まず，練習します。",
              "title": "まず始めに練習します。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "練習を始める →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Inst 1"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "Response": "jkey",
              "TargetCondition": "1",
              "StimNum": "6"
            },
            {
              "Response": "fkey",
              "TargetCondition": "1",
              "StimNum": "9"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": ""
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Loop",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "if_else",
            "content": [
              {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "ConditionB",
                "tardy": true,
                "skip": "${this.state.TargetCondition!=2}",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 21.25,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Fix",
                    "timeout": "1500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 444.77,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${this.random.range(10,1)}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {},
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Black",
                    "timeout": "1000"
                  }
                ]
              },
              {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "ConditionA",
                "tardy": true,
                "skip": "${this.state.TargetCondition!=1}",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 21.25,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Fix",
                    "timeout": "1500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 444.77,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${this.random.range(10,1)}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {},
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Black",
                    "timeout": "1000"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 21.25,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Fix",
                    "timeout": "1500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 444.77,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${this.random.range(10,1)}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {},
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Black",
                    "timeout": "1000"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 21.25,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Fix",
                    "timeout": "1500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 460.31,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a",
                        "text": "${this.parameters.StimNum}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(f)": "fkey",
                      "keypress(j)": "jkey"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Red",
                    "correctResponse": "${parameters.Response}"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 503.34,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${state.correct?\"正解\":\"不正解\"}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "feedback",
                    "tardy": true,
                    "timeout": "700"
                  }
                ]
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "練習と同じです。この実験では画面の中央に赤色または黒色の数字が呈示されます。黒色の数字が呈示されている間は，無視してください。赤色の数字が呈示されたら，その数字が奇数であれば「奇キー(Fキー）」を，偶数であれば「偶キー（Jキー）」を押してください。",
              "title": "本試行をはじめます。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "本試行を始める →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Inst 2"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "noresp",
              "TargetCondition": "2",
              "StimNum": "0"
            },
            {
              "Response": "fkey",
              "TargetCondition": "1",
              "StimNum": "1"
            },
            {
              "Response": "fkey",
              "TargetCondition": "1",
              "StimNum": "1"
            },
            {
              "Response": "jkey",
              "TargetCondition": "1",
              "StimNum": "2"
            },
            {
              "Response": "jkey",
              "TargetCondition": "1",
              "StimNum": "2"
            },
            {
              "Response": "fkey",
              "TargetCondition": "1",
              "StimNum": "3"
            },
            {
              "Response": "fkey",
              "TargetCondition": "1",
              "StimNum": "3"
            },
            {
              "Response": "jkey",
              "TargetCondition": "1",
              "StimNum": "4"
            },
            {
              "Response": "jkey",
              "TargetCondition": "1",
              "StimNum": "4"
            },
            {
              "Response": "fkey",
              "TargetCondition": "1",
              "StimNum": "5"
            },
            {
              "Response": "fkey",
              "TargetCondition": "1",
              "StimNum": "5"
            },
            {
              "Response": "jkey",
              "TargetCondition": "1",
              "StimNum": "6"
            },
            {
              "Response": "jkey",
              "TargetCondition": "1",
              "StimNum": "6"
            },
            {
              "Response": "fkey",
              "TargetCondition": "1",
              "StimNum": "7"
            },
            {
              "Response": "fkey",
              "TargetCondition": "1",
              "StimNum": "7"
            },
            {
              "Response": "jkey",
              "TargetCondition": "1",
              "StimNum": "8"
            },
            {
              "Response": "jkey",
              "TargetCondition": "1",
              "StimNum": "8"
            },
            {
              "Response": "jkey",
              "TargetCondition": "1",
              "StimNum": "8"
            },
            {
              "Response": "fkey",
              "TargetCondition": "1",
              "StimNum": "9"
            },
            {
              "Response": "fkey",
              "TargetCondition": "1",
              "StimNum": "9"
            },
            {
              "Response": "fkey",
              "TargetCondition": "1",
              "StimNum": "9"
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": ""
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Loop",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "if_else",
            "content": [
              {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "ConditionB",
                "tardy": true,
                "skip": "${this.state.TargetCondition!=2}",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 21.25,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Fix",
                    "timeout": "1500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 444.77,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${this.random.range(10,1)}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {},
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Black",
                    "timeout": "1000"
                  }
                ]
              },
              {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "ConditionA",
                "tardy": true,
                "skip": "${this.state.TargetCondition!=1}",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 21.25,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Fix",
                    "timeout": "1500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 444.77,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${this.random.range(10,1)}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {},
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Black",
                    "timeout": "1000"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 21.25,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Fix",
                    "timeout": "1500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 444.77,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${this.random.range(10,1)}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {},
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Black",
                    "timeout": "1000"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 21.25,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Fix",
                    "timeout": "1500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 460.31,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "#d6341a",
                        "text": "${this.parameters.StimNum}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(f)": "fkey",
                      "keypress(j)": "jkey"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Red",
                    "correctResponse": "${parameters.Response}"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 503.34,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${state.correct?\"正解\":\"不正解\"}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "feedback",
                    "tardy": true,
                    "timeout": "700"
                  }
                ]
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "これで数字の偶奇を答える課題は終わりです。ありがとうございました。",
              "content": "次に，5つの質問に答えて頂きます。準備ができ次第，「次へ」をクリックしてください。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Questions"
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "Question   先ほど行った，数字の偶奇を答える課題中に，以下に示すような事柄がどのぐらい頭に浮かんでいましたか。回答は選択肢のボタンをチェックすることで行ってください。"
                },
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "coding": "1",
                      "label": "全然なかった"
                    },
                    {
                      "coding": "2",
                      "label": "一度だけ浮かんだ"
                    },
                    {
                      "coding": "3",
                      "label": "数回浮かんだ"
                    },
                    {
                      "coding": "4",
                      "label": "かなり浮かんだ"
                    }
                  ],
                  "label": "1. 数字の偶奇を答える課題中に，気づいたら課題とは異なることについて考えていた。",
                  "name": "1."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次の質問 →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "question1 "
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "Question   先ほど行った，数字の偶奇を答える課題中に，以下に示すような事柄がどのぐらい頭に浮かんでいましたか。回答は選択肢のボタンをチェックすることで行ってください。"
                },
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "coding": "1",
                      "label": "全然なかった"
                    },
                    {
                      "coding": "2",
                      "label": "一度だけ浮かんだ"
                    },
                    {
                      "coding": "3",
                      "label": "数回浮かんだ"
                    },
                    {
                      "coding": "4",
                      "label": "かなり浮かんだ"
                    }
                  ],
                  "label": "2. 数字の偶奇を答える課題中に，ぼんやりして他のことを考えていた。",
                  "name": "2."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次の質問 →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "question2"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "Question   先ほど行った，数字の偶奇を答える課題中に，以下に示すような事柄がどのぐらい頭に浮かんでいましたか。回答は選択肢のボタンをチェックすることで行ってください。"
                },
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "coding": "1",
                      "label": "全然なかった"
                    },
                    {
                      "coding": "2",
                      "label": "一度だけ浮かんだ"
                    },
                    {
                      "coding": "3",
                      "label": "数回浮かんだ"
                    },
                    {
                      "coding": "4",
                      "label": "かなり浮かんだ"
                    }
                  ],
                  "label": "3. 数字の偶奇を答える課題中に，自分の空想した内容について考えていた。",
                  "name": "3."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次の質問 →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "question3"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "Question   先ほど行った，数字の偶奇を答える課題中に，以下に示すような事柄がどのぐらい頭に浮かんでいましたか。回答は選択肢のボタンをチェックすることで行ってください。"
                },
                {
                  "required": true,
                  "type": "radio",
                  "options": [
                    {
                      "coding": "1",
                      "label": "全然なかった"
                    },
                    {
                      "coding": "2",
                      "label": "一度だけ浮かんだ"
                    },
                    {
                      "coding": "3",
                      "label": "数回浮かんだ"
                    },
                    {
                      "coding": "4",
                      "label": "かなり浮かんだ"
                    }
                  ],
                  "label": "4. 数字の偶奇を答える課題中に，空想にふけり，別のことを考えていた。",
                  "name": "4."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次の質問 →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "question4"
            }
          ]
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "Question   先ほど行った，数字の偶奇を答える課題中に，冒頭に行った，レンガと紙コップの普段とは異なる使い方を答える課題のことがどのぐらい頭に浮かんでいましたか。回答は選択肢のボタンをチェックすることで行ってください。",
              "title": ""
            },
            {
              "required": true,
              "type": "radio",
              "options": [
                {
                  "coding": "1",
                  "label": "全然なかった"
                },
                {
                  "coding": "2",
                  "label": "一度だけ浮かんだ"
                },
                {
                  "coding": "3",
                  "label": "数回浮かんだ"
                },
                {
                  "coding": "4",
                  "label": "かなり浮かんだ"
                }
              ],
              "label": "5. 数字の偶奇を答える課題中に，レンガと紙コップの使い方を答える課題のことを考えていた。",
              "name": "5."
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Last Question"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "まず，レンガの日常とは異なる使い方について，先ほどの続きから取り組んでいただきます。回答は，重複しないようにお願いします。制限時間は2分間です。",
              "title": "冒頭に行った，日常で使う「物」の通常とは異なる使い方を答える問題を再開します。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "回答を始める →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "task1' explanation"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 120,
              "height": 45.2,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "レンガ",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "40",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "task1'",
          "timeout": "120000"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "次に，段ボールの日常とは異なる使い方について，先ほどの続きから取り組んでいただきます。回答は，重複しないようにお願いします。制限時間は2分間です。",
              "title": "冒頭に行った，日常で使う「物」の通常とは異なる使い方を答える問題を再開します。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "回答を始める →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "task2' explanation"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 2,
              "height": 45.2,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "40",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 128,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "段ボール",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "task2'",
          "timeout": "120000"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "ありがとうございました。",
              "content": "以下の「結果のダウンロード」ボタンを押すと結果をダウンロードできます。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "結果のダウンロード →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Thanks"
        }
      ]
    }
  ]
})

// Let's go!
study.run()