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
              "content": "この実験では，画面に呈示される数字に対してキーボードで反応をしてもらいます。所要時間は約12分です。",
              "title": "認知課題"
            },
            {
              "required": true,
              "type": "text",
              "title": "",
              "content": "実験による多少の疲労は除き，潜在的なリスクや苦痛はありません。また，いつ，いかなる理由でも，実験を中止していただけます。もし，途中で実験・調査を中止したくなった場合は，「ESCキー」を押した後，ウィンドウを閉じることで実験を中止できます。"
            },
            {
              "required": true,
              "type": "text",
              "title": "",
              "content": "まず始めに練習試行を行い，次に，本試行を行います。"
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
          "title": "explanation"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "この実験では画面の中央に赤色または黒色の数字が呈示されます。黒色の数字が呈示されている間は，無視してください。赤色の数字が呈示されたら，その数字が奇数であれば「奇キー(fキー）」を，偶数であれば「偶キー（jキー）」を押してください。まず，練習します。",
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
          "title": "Inst"
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
              "content": "練習と同じです。この実験では画面の中央に赤色または黒色の数字が呈示されます。黒色の数字が呈示されている間は，無視してください。赤色の数字が呈示されたら，その数字が奇数であれば「奇キー(fキー）」を，偶数であれば「偶キー（jキー）」を押してください。",
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
          "title": "Inst"
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
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "ありがとうございました。",
          "content": "これで実験は終了です。以下の「結果のダウンロード」ボタンを押すと結果をダウンロードできます。"
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
})

// Let's go!
study.run()