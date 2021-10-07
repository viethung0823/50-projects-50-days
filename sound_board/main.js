const songs = document.querySelectorAll(".container>div");
const audio = document.querySelector("audio");
const pauseBtn = document.querySelector("#pause");

const listSongs = [
  "https://c1-ex-swe.nixcdn.com/NhacCuaTui985/HayTraoChoAnh-SonTungMTPSnoopDogg-6010660.mp3?st=OU0yp6_IlO75GfPwVe4PEA&e=1631354579&t=1631268178771"
  , "https://c1-ex-swe.nixcdn.com/NhacCuaTui925/ChungTaKhongThuocVeNhau-SonTungMTP-4528181.mp3?st=Ojq2b7iibYy5czjzzp5vjQ&e=1631358089&t=1631271688142"
  , "https://c1-ex-swe.nixcdn.com/NhacCuaTui884/KhongPhaiDangVuaDau-SonTungMTP-3753840.mp3?st=0QK-MEvi3a7mn0lnanjfRw&e=1631358107&t=1631271706320"
  , "https://c1-ex-swe.nixcdn.com/YG_Audio1/FxxkIt-BIGBANG-6292297.mp3?st=_v63-xz95tRnsXZEylBG9g&e=1631358153&t=1631271752929"
  , "https://c1-ex-swe.nixcdn.com/YG_Audio1/Loser-BIGBANG-6291940.mp3?st=8Jo_gzuLch-f2Ptd7ryR_g&e=1631358130&t=1631271729850"
  , "https://c1-ex-swe.nixcdn.com/YG_Audio1/LastDance-BIGBANG-6292277.mp3?st=FAc2zjTV4d6u_yGao5z--A&e=1631358176&t=1631271775155"
]

for (let i = 0; i <songs.length;i++) {
  songs[i].addEventListener("click", ()=> {
    audio.src = listSongs[i];
    audio.play();
  })
}

pauseBtn.addEventListener("click", ()=> {
  audio.pause();
})