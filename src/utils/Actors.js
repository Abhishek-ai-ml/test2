const actorsData = [
    {
        id:1,
        name:"Ajay Devgn",
        image:"https://drive.google.com/uc?id=1nDMe21QR8eNMfUupiY_w622tRqmbdiJC"
    },
    {
        id:2,
        name:"Tabu",
        image:"https://drive.google.com/uc?id=1gsRGtAHXVwrdfWplilVtHXu7r4s0Q8U2"
    },
    {
        id:3,
        name:"Deepak Dobriyal",
        image:"https://drive.google.com/uc?id=1nbsWrTJAYJttnJI7DGDzI16xcNOxiO1R"
    },
    {
        id:4,
        name:"Sanjay Mishra",
        image:"https://drive.google.com/uc?id=1BEZKC8zhLKIPrOh_spyqVZh6igBZxMvH"
    },
    {
        id:5,
        name:"Ranbir Kapoor",
        image:"https://drive.google.com/uc?id=19yVD010b5C3yqjNHYTAwsWexDylj8rZ_"
    },
    {
        id:6,
        name:"Shraddha Kappor",
        image:"https://drive.google.com/uc?id=1jEcHF6dMcQUgLpblBzx1q4fufROvEBdj"
    },
    {
        id:7,
        name:"Anubhav Singh Bassi",
        image:"https://drive.google.com/uc?id=1YZouihegEdKUEZ2xMupJe2YzHKKmQpm1"
    },
    {
        id:8,
        name:"Dimple Kapadia",
        image:"https://drive.google.com/uc?id=1iiIz9jyuoijkkH9OZCbrZRHHc3hL8lAH"
    },
    {
        id:9,
        name:"Zachary Levi",
        image:"https://drive.google.com/uc?id=1pM_-w0xiu2uOMGzBaELYFs599GreutSd"
    },
    {
        id:10,
        name:"Asher Angel",
        image:"https://drive.google.com/uc?id=1YQeWw8uQuPjsmEBOp0os8oPPoyBm02Yr"
    },
    {
        id:11,
        name:"Helen Mirren",
        image:"https://drive.google.com/uc?id=1iqQ_i11ZEv1bPvMtD7YCA4pWODu7nSCa"
    },
    {
        id:12,
        name:"Lucy Liu",
        image:"https://drive.google.com/uc?id=1YjN9NeEciAuTBFAlIgPjN1PMkkq5PvsT"
    },
    {
        id:13,
        name:"Russell Crowe",
        image:"https://drive.google.com/uc?id=1i9s_E9HoZre2Vuo2fdJQl1S7D5NY4nKB"
    },
    {
        id:14,
        name:"Ralph Ineson",
        image:"https://drive.google.com/uc?id=1UeG4sbhw0dJCpnpyXB4Id7bvYar_Vvo0"
    },
    {
        id:15,
        name:"Franco Nero",
        image:"https://drive.google.com/uc?id=1ZzytumCgp47AO_qIJr6tL6M89twtOWoB"
    },
    {
        id:16,
        name:"Chris Pratt",
        image:"https://drive.google.com/uc?id=1fZRO9-XnicEqnr_6yAlqF-ANebcczCJv"
    },
    {
        id:17,
        name:"Anya Taylor-Joy",
        image:"https://drive.google.com/uc?id=1fAsOQMrbj8Ljpz5WO5NjTSJ4-kXiB35R"
    },
    {
        id:18,
        name:"Charlie Day",
        image:"https://drive.google.com/uc?id=1XQGXxws0z4QhKlXubCIv8MyP_ABrt6RT"
    },
    {
        id:19,
        name:"Jack Black",
        image:"https://drive.google.com/uc?id=1zZtQLJH05EG2JyvblTzqOmkcw4A0dhBn"
    },
    {
        id:20,
        name:"Keanu Reeves",
        image:"https://drive.google.com/uc?id=1EDHjKyk7CBEgFj4SwBU1UiOyk8MaUrmf"
    },
    {
        id:21,
        name:"Donnie Yen",
        image:"https://drive.google.com/uc?id=1BmlLyB6QQc8Xv0KgrSwiL1amaoyOpxTZ"
    },
    {
        id:22,
        name:"Ian McShane",
        image:"https://drive.google.com/uc?id=1_CxxgvVrUkxdyXTq7MtCHU69w7ZQc03-"
    },
    {
        id:23,
        name:"Bill Skarsgard",
        image:"https://drive.google.com/uc?id=1qjVUDsLA_QJJ-FJIZO_G3UUjVi7bGoNK"
    },
    {
        id:24,
        name:"Aditya Roy Kapur",
        image:"https://drive.google.com/uc?id=1S5zkZif_TtA9kjHAq_B_pSMV7k5uYTi6"
    },
    {
        id:25,
        name:"Mrunal Thakur",
        image:"https://drive.google.com/uc?id=1RdRiQovWUKhah9QeQzAFmGKJRdcux8c8"
    },
    {
        id:26,
        name:"Ronit Roy",
        image:"https://drive.google.com/uc?id=1K7PLsP-9XISn4shXTp1G-z9DBzfSXyrB"
    },
    {
        id:27,
        name:"Chris Pine",
        image:"https://drive.google.com/uc?id=18WNEH63NKNA9Otlq6kXxuEygR9dhekTr"
    },
    {
        id:28,
        name:"Michelle Rodriguez",
        image:"https://drive.google.com/uc?id=1vdFS8uWW_-qsUFN8YaG6iIVwtCeCfvWY"
    },
    {
        id:29,
        name:"Rege-Jean Page",
        image:"https://drive.google.com/uc?id=1rwbtV4cNJ-vWP21XCKUGBx5Ntko6OLEz"
    },
    {
        id:30,
        name:"Justice Smith",
        image:"https://drive.google.com/uc?id=197BMsu5SLAPN2Ch1DCgyeE3ZTldQNivY"
    },
    {
        id:31,
        name:"Nani",
        image:"https://drive.google.com/uc?id=19zMtM4IJewVp4OUNbydRdjflnoW5zjOb"
    },
    {
        id:32,
        name:"Keerthy Suresh",
        image:"https://drive.google.com/uc?id=1sbOegvZonHbp4fzGwaZwA8HfNQn_EdSx"
    },
    {
        id:33,
        name:"Shine Tom Chacko",
        image:"https://drive.google.com/uc?id=1nrrTqblLDSNqwUmzsCghPD1p3PpwixcB"
    },
    {
        id:34,
        name:"Samuthirakani",
        image:"https://drive.google.com/uc?id=1CQi0RKh4v8ZSRTfTKtf8VW0KmBNilLT5"
    }, 
    {
        id:35,
        name:"Rani Mukerji",
        image:"https://drive.google.com/uc?id=1qI-GYlLbi-m2bhx0-n9GNcuhNsC-kALB"
    },
    {
        id:36,
        name:"Anirban Bhattacharya",
        image:"https://drive.google.com/uc?id=1nQsQKlcliph634TwiVc-7r19677UjUEq"
    },
    {
        id:37,
        name:"Jim Sarbh",
        image:"https://drive.google.com/uc?id=1Z2R0783L8W-IXjjBN5aW5R2SKL3l94TX"
    },
    {
        id:38,
        name:"Neena Gupta",
        image:"https://drive.google.com/uc?id=1zBwI22FQoN92-_bEQ0VdElsuBRrwV29g"
    }
];

export default actorsData;