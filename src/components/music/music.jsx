import React from "react";
import { useState, useEffect } from "react";
import "./music.css";
import Player from "../../assets/player/Player";
/*songs and their images*/
import Powerful from "../../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3";
import ImageX from "../../assets/XtraImgs/img/Tribe of Jones.jpeg"
import BeingGrateful from "../../assets/music/Tribe of Jones - OYE KA DUPE (being grateful).mp3";
import ImageXX from "../../assets/XtraImgs/img/Tribe-of-Jones.jpeg"
import YouAreJehovah from "../../assets/music/Tribe of Jones - You Are Jehovah.mp3";
import ImageXXX from "../../assets/XtraImgs/img/mic1.jpg"
import AllBelongsToYou from "../../assets/music/Tribe of Jones - All belongs to you.mp3";
import ImageXXXX from "../../assets/XtraImgs/img/TRIBE OF JONES.jpeg"
import SongOfVictory from "../../assets/music/Tribe of Jones - Song of Victory.mp3";
import ImageXXXXX from "../../assets/XtraImgs/img/mic1.jpg"
import NoPressure from "../../assets/music/Dont kill yourself beat new.mp3";
import ImageXXXXXX from "../../assets/XtraImgs/img/background1.jpg"
import SelfConfidence from "../../assets/music/Dont kill yourself beat.mp3";
import ImageXXXXXXX from "../../assets/XtraImgs/img/self.jpg"



function Music() {

  const [songs] = useState([
    {
      title: "Alagbara Ni o (most powerful)",
      artist: "Tribe of Jones",
      album: "Most powerful",
      track: "Single",
      year: "2022/08",
      img_src: ImageX,
      src: Powerful,
    },
    {
      title: "Ó yẹ ká dúpẹ́ (being grateful)",
      artist: "Tribe of Jones",
      album: "Act of gratefulness",
      track: "Single",
      year: "2022/08",
      img_src: ImageXX,
      src: BeingGrateful,
    },
    {
      title: "You Are Jehovah",
      artist: "Tribe of Jones",
      album: "The Greatest",
      track: "Single",
      year: "2021/08",
      img_src: ImageXXX,
      src: YouAreJehovah,
    },
    {
      title: "All Belongs To You",
      artist: "Tribe of Jones",
      album: "All from You and to You",
      track: "1",
      year: "2021/08",
      img_src: ImageXXXX,
      src: AllBelongsToYou,
    },
    {
      title: "Song of victory",
      artist: "Tribe of Jones",
      album: "I'm victorious",
      track: "1",
      year: "pre order only",
      img_src: ImageXXXXX,
      src: SongOfVictory,
    },
    {
      title: "No Pressure",
      artist: "Tribe of Jones",
      album: "Hope in God",
      track: "1",
      year: "pre order only",
      img_src: ImageXXXXXX,
      src: NoPressure,
    },
    {
      title: "Self confidence",
      artist: "Tribe of Jones",
      album: "Self confidence",
      track: "1",
      year: "pre order only",
      img_src: ImageXXXXXXX,
      src: SelfConfidence,
    },
    /* {
      title: "Baby You're Worth It",
      artist: "Kina",
      album: "Baby You're Worth It",
      track: "1",
      year: "",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Backpack City",
      artist: "Flovry",
      album: " tender spring",
      track: "Ages Ago",
      year: "4",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Beauty",
      artist: "eyeroze",
      album: "Heartless",
      track: "4",
      year: "",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Better Than He Can",
      artist: "Jennifer Flores",
      album: " Shiloh Dynasty",
      track: " LofiCentral",
      year: "All My Love",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Break My Heart Again",
      artist: "90degrees",
      album: "Break My Heart Again",
      track: "1",
      year: "",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Brightness",
      artist: "eyeroze",
      album: "Heartless",
      track: "15",
      year: "",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Call me",
      artist: "90sFlav",
      album: "Collection",
      track: "1",
      year: "",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Can We Kiss Forever?",
      artist: "Kina",
      album: " Adriana Proenza",
      track: "Can We Kiss Forever?",
      year: "1",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Can't Love Myself",
      artist: "Monty Datta",
      album: " Mishaal",
      track: "Can't Love Myself",
      year: "1",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Can't Take My Eyes off You",
      artist: "Craymer",
      album: " AIIVAWN",
      track: "Can't Take My Eyes off You",
      year: "1",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Cigarettes and Sex",
      artist: "prxz",
      album: " Shiloh Dynasty",
      track: "Love Wounds",
      year: "1",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Coffee Breath",
      artist: "eyeroze",
      album: "Coffee Breath",
      track: "1",
      year: "",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "controlla",
      artist: "Idealism",
      album: "rainy evening",
      track: "2",
      year: "",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Cream",
      artist: "eyeroze",
      album: "Heartless",
      track: "14",
      year: "",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Day in Paris",
      artist: "Llusion",
      album: "Day in Paris",
      track: "1",
      year: "",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Daydreaming",
      artist: "eyeroze",
      album: "Heartless",
      track: "8",
      year: "",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Death Bed",
      artist: "Fets",
      album: " Koosen",
      track: " Formal Chicken",
      year: "Death Bed",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "drift...",
      artist: "junyii.",
      album: " Chill Children",
      track: "junyii・float",
      year: "3",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Evil Morty",
      artist: "Weegie",
      album: " Koosen",
      track: " Poky",
      year: "Evil Morty",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Feblu",
      artist: "Flughand",
      album: "EXPEDITion Vol. 7: Moonloops",
      track: "2",
      year: "",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "Fever Dream",
      artist: "Ethan Rebel",
      album: "Fever Dream",
      track: "1",
      year: "",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "First Heartbreak",
      artist: "Flovry",
      album: " tender spring",
      track: "Ages Ago",
      year: "3",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    },
    {
      title: "French Inhale",
      artist: "[bsd.u]",
      album: "444",
      track: "2",
      year: "",
      img_src: "../assets/XtraImgs/img/mic1.jpg",
      src: "../assets/music/Tribe of Jones - Alagbara Ni o (most powerful).mp3",
    } */
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="Music">
      <h5>My other passion</h5>
      <h2>My Music</h2>
      {/* <div className="weirdShape"></div> */}
      
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />

    </div>
  );
}

export default Music;