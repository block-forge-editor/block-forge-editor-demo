import { BlockForgeEditor } from "@block-forge/block-forge-editor";
import "@block-forge/block-forge-editor/dist/index.css";

const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      id: "4k-k_4z4uf",
      type: "paragraph",
      data: {
        text: "<b>Block Forge Editor Demo</b>",
        fontSize: 20,
        tag: "h1",
      },
    },
    {
      id: "soqR63JCky",
      type: "paragraph",
      data: {
        text: "<b>List</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "P7pzcUmYw1",
      type: "list",
      data: {
        style: "unordered",
        meta: {},
        items: [
          {
            content: "Item1",
            meta: {},
            items: [],
          },
          {
            content: "Item 2",
            meta: {},
            items: [],
          },
          {
            content: "Item 3",
            meta: {},
            items: [],
          },
        ],
      },
    },
    {
      id: "k0V3IeW9d4",
      type: "paragraph",
      data: {
        text: "<b>Table</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "5CxpNLMX0W",
      type: "table",
      data: {
        withHeadings: true,
        stretched: false,
        content: [
          ["Header  1", "Header 2", "Header 3", "Header 4"],
          ["Test", "Test", "Test", "Test"],
          ["Test", "Test", "Test", "Test"],
        ],
      },
    },
    {
      id: "gNmBJcbRQI",
      type: "paragraph",
      data: {
        text: "<b>Divider</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "embfd9GUHx",
      type: "divider",
      data: {},
    },
    {
      id: "O3VJZaT5V5",
      type: "paragraph",
      data: {
        text: "<b>Excalidraw</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "v3zQohc1S8",
      type: "excalidraw",
      data: {
        elements: [],
        appState: {},
        files: {},
      },
    },
    {
      id: "ggRMBwKRDC",
      type: "paragraph",
      data: {
        text: "<b>Columns</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "Gl57Mipljf",
      type: "columns",
      data: {
        columns: [
          {
            id: "c09183d5-8f63-4dd4-a541-e0fe0377e6c8",
            size: 33.3333333334,
            content: {
              time: 1750583124648,
              blocks: [
                {
                  id: "UB_SwLg7L1",
                  type: "paragraph",
                  data: {
                    text: "Test",
                    fontSize: 16,
                    tag: "p",
                  },
                },
              ],
              version: "2.31.0-rc.7",
            },
          },
          {
            id: "b673e953-3f7c-42da-90f0-e44f9d83610b",
            size: 33.3333333333,
            content: {
              time: 1750583131134,
              blocks: [
                {
                  id: "X1Cp6ig7Yj",
                  type: "paragraph",
                  data: {
                    text: "Empty column",
                    fontSize: 16,
                    tag: "p",
                  },
                },
              ],
              version: "2.31.0-rc.7",
            },
          },
          {
            id: "d15db2e6-2212-44f4-b283-f9c30b1d7adf",
            size: 33.3333333333,
            content: {
              time: 1750583144811,
              blocks: [
                {
                  id: "sgAIzS2919",
                  type: "list",
                  data: {
                    style: "unordered",
                    meta: {},
                    items: [
                      {
                        content: "1",
                        meta: {},
                        items: [],
                      },
                      {
                        content: "2",
                        meta: {},
                        items: [],
                      },
                      {
                        content: "3",
                        meta: {},
                        items: [],
                      },
                    ],
                  },
                },
                {
                  id: "F1X_zJW5ty",
                  type: "table",
                  data: {
                    withHeadings: false,
                    stretched: false,
                    content: [
                      ["123", "123", "123"],
                      ["123", "123", "123"],
                    ],
                  },
                },
                {
                  id: "DKnz1W0WkE",
                  type: "divider",
                  data: {},
                },
              ],
              version: "2.31.0-rc.7",
            },
          },
        ],
      },
    },
    {
      id: "oc3wtRC5Ke",
      type: "paragraph",
      data: {
        text: "<b>Image Gallery</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "9yFfOf_BSR",
      type: "imageGallery",
      data: {
        images: [
          {
            id: "6b94d5e7-5c92-4d70-b87f-de11119debaa",
            url: "https://images.pexels.com/photos/19565252/pexels-photo-19565252.jpeg",
            alt: "",
          },
          {
            id: "06b3d345-e042-4ba3-a9bf-93db734b051a",
            url: "https://images.pexels.com/photos/19565252/pexels-photo-19565252.jpeg",
            alt: "",
          },
        ],
        variant: "primary",
      },
    },
    {
      id: "f3zwB8RKQQ",
      type: "paragraph",
      data: {
        text: "<b>Image</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "S6xbUu5e7C",
      type: "imageSingle",
      data: {
        id: "f465c59d-c96e-42f5-8bed-ef9fb2ca43fe",
        url: "https://images.pexels.com/photos/19565252/pexels-photo-19565252.jpeg",
        caption: "Image Caption",
        alt: "Alt Text",
      },
    },
    {
      id: "MDX8adwVRa",
      type: "paragraph",
      data: {
        text: "<b>Figma</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "BRNjtLCam_",
      type: "figma",
      data: {
        figmaUrl:
          "https://www.figma.com/design/kSz0LOOTQxaf6ve6jqz1Y8/Test-File?node-id=1-7&t=zAMIXqFAMuRVeO4Z-4",
      },
    },
    {
      id: "VhLUqe_ewQ",
      type: "paragraph",
      data: {
        text: "<b>Quote</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "k0hrkVTd8o",
      type: "quote",
      data: {
        text: "Quote text",
        author: "Author name",
        source: "Source",
      },
    },
    {
      id: "D4Mq-sPS4R",
      type: "paragraph",
      data: {
        text: "<b>Code block</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "_iGHExAui8",
      type: "code",
      data: {
        code: '{\n  "coord": {\n    "lon": 139.01,\n    "lat": 35.02\n  },\n  "weather": [\n    {\n      "id": 800,\n      "main": "Clear",\n      "description": "clear sky",\n      "icon": "01n"\n    }\n  ],\n  "base": "stations",\n  "main": {\n    "temp": 285.514,\n    "pressure": 1013.75,\n    "humidity": 100,\n    "temp_min": 285.514,\n    "temp_max": 285.514,\n    "sea_level": 1023.22,\n    "grnd_level": 1013.75\n  },\n  "wind": {\n    "speed": 5.52,\n    "deg": 311\n  },\n  "clouds": {\n    "all": 0\n  },\n  "dt": 1485792967,\n  "sys": {\n    "message": 0.0025,\n    "country": "JP",\n    "sunrise": 1485726240,\n    "sunset": 1485763863\n  },\n  "id": 1907296,\n  "name": "Tawarano",\n  "cod": 200\n}',
        language: "json",
      },
    },
    {
      id: "2fswpYpV9n",
      type: "paragraph",
      data: {
        text: "<b>Video</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "8ec3QnV6e8",
      type: "videoEmbed",
      data: {
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
        platform: "youtube",
      },
    },
    {
      id: "mitEmJ27WY",
      type: "paragraph",
      data: {
        text: "<b>Social</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "_ibEMNz7qF",
      type: "social",
      data: {
        links: [
          {
            platform: "twitter",
            url: "https://x.com/",
          },
          {
            platform: "github",
            url: "https://github.com/",
          },
          {
            platform: "tiktok",
            url: "https://tiktok.com/",
          },
          {
            platform: "youtube",
            url: "https://youtube.com/",
          },
        ],
      },
    },
    {
      id: "nN5zbsm8QK",
      type: "paragraph",
      data: {
        text: "<b>Card</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "MJDio2uY_8",
      type: "card",
      data: {
        title: "Card Title",
        description: "Card description",
        icon: "Heart",
      },
    },
    {
      id: "ekpSGJdJJA",
      type: "paragraph",
      data: {
        text: "<b>Stats</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "6wFvTYV7Mp",
      type: "stats",
      data: {
        items: [
          {
            value: "Item 1",
            label: "Label",
            icon: "BarChart3",
          },
          {
            value: "Item 2",
            label: "Label",
            icon: "BarChart3",
          },
          {
            value: "Item 3",
            label: "Label",
            icon: "BarChart3",
          },
        ],
      },
    },
    {
      id: "uWLY2RS0TI",
      type: "paragraph",
      data: {
        text: "<b>Timeline</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "iwuS2VuWCa",
      type: "timeline",
      data: {
        events: [
          {
            date: "1918",
            title: "Title",
            description: "Description",
          },
          {
            date: "1921",
            title: "Title",
            description: "Description",
          },
          {
            date: "1956",
            title: "Title",
            description: "Description",
          },
        ],
      },
    },
    {
      id: "aibkw-h7qG",
      type: "paragraph",
      data: {
        text: "<b>Progress</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "iFqCfEgAl8",
      type: "progress",
      data: {
        items: [
          {
            label: "Progress 1",
            value: "22",
          },
          {
            label: "Progress 2",
            value: "55",
          },
          {
            label: "Progress 3",
            value: "100",
          },
        ],
      },
    },
    {
      id: "pS2Bn6uM2P",
      type: "paragraph",
      data: {
        text: "<b>Testimonials</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "KAFDgtA5Rr",
      type: "testimonials",
      data: {
        items: [
          {
            name: "Name",
            role: "Role",
            photo: "",
            text: " Text",
            icon: "",
          },
          {
            name: "",
            role: "",
            photo: "",
            text: "",
            icon: "",
          },
        ],
      },
    },
    {
      id: "_4jcupJSWV",
      type: "paragraph",
      data: {
        text: "<b>Accordion</b>",
        fontSize: 16,
        tag: "p",
      },
    },
    {
      id: "_whfkAkiI6",
      type: "accordion",
      data: {
        item: {
          title: "Section",
          content: {
            time: 1750583730377,
            blocks: [
              {
                id: "24_vv5aB0Z",
                type: "paragraph",
                data: {
                  text: "Empty Accordion",
                  fontSize: 16,
                  tag: "p",
                },
              },
            ],
            version: "2.31.0-rc.7",
          },
        },
      },
    },
  ],
  meta: {
    font: "times",
    background: "emerald-50",
  },
};

export function App() {
  return (
    <>
      <BlockForgeEditor
        id="demo-editor"
        initialData={DEFAULT_INITIAL_DATA}
        onCancel={() => {
          console.log("App: cancel handler called");
        }}
        onSave={(data) => {
          console.log("App: save handler called with data:", data);
        }}
        onChange={(data) => {
          console.log("App: change handler called with data:", data);
        }}
      />
    </>
  );
}
