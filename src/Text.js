import React, { Component } from 'react';
import './Text.css';
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
// import { findAllByLabelText } from '@testing-library/react';
gsap.registerPlugin(TextPlugin);

class Text extends Component{
  //_isMounted = false;
    
    static defaultProps={
        colors:[
          {dark:"#586C74", light:"#D3DB01"},{dark:"#CC2E22", light:"#FFB813"},{dark:"#F7CE16", light:"#2A64A9"},{dark:"#502F7E", light:"#EDB200"},{dark:"#0F2F56", light:"#FC3B2D"},{dark:"#1D382A", light:"#FEBC03"},{dark:"#2D159D", light:"#C49D62"},{dark:"#44276C", light:"#14E1E3"},{dark:"#1E3C35", light:"#E10200"},{dark:"#29292B", light:"#A546A7"},{dark:"#1606FF", light:"#CDFF03"},{dark:"#29292B", light:"#A546A7"},{dark:"#0A2BFA", light:"#BCFFBA"},{dark:"#32155D", light:"#FF8C8A"},{dark:"#6514C9", light:"#F25A0F"},{dark:"#0A2823", light:"#FEC6D6"},{dark:"#FF2C93", light:"#7CE0E6"},{dark:"#191F46", light:"#D17B78"},{dark:"#0F3A34", light:"#FEC6D6"},{dark:"#EF3D4B", light:"#96CBD1"},{dark:"#91FFE4", light:"#073EA7"},{dark:"#D36478", light:"#84CEBA"},{dark:"#1E3C35", light:"#FEBC03"},{dark:"#44276C", light:"#14E1E3"},{dark:"#FF5100", light:"#B3E129"},{dark:"#0A3DA5", light:"#91FFE4"},{dark:"#29292B", light:"#A546A7"},{dark:"#0B4F6B", light:"#FEBA00"},{dark:"#2D159D", light:"#C49D62"},{dark:"#643387", light:"#F3725B"},{dark:"#276591", light:"#FD6649"},{dark:"#C43253", light:"#D3B838"},{dark:"#FF5100", light:"#B3E129"},{dark:"#112478", light:"#F64902"},{dark:"#6514C9", light:"#DFDC01"},{dark:"#093EA7", light:"#91FFE4"},{dark:"#3C755F", light:"#F3CB6B"},{dark:"#F31454", light:"#12E3BA"},{dark:"#0E1C7E", light:"#FF4D05"},{dark:"#009BC6", light:"#FFD15D"},{dark:"#E5270F", light:"#7EBEC1"},{dark:"#54130A", light:"#EF5B09"},{dark:"#821E74", light:"#FF8C8A"},{dark:"#1606FF", light:"#CDFF03"},{dark:"#F31454", light:"#12E3BA"},{dark:"#C43253", light:"#D3B838"},{dark:"#1E3C35", light:"#E10200"},{dark:"#0D1915", light:"#FEBC03"},{dark:"#5125B0", light:"#99FFD0"},{dark:"#821E74", light:"#FF8C8A"},{dark:"#29292B", light:"#A546A7"},{dark:"#8C23FF", light:"#00FDFF"},{dark:"#502F7E", light:"#EDB200"},{dark:"#E5E8DC", light:"#F6748C"},{dark:"#821E74", light:"#FF8C8A"}, {dark:"#168E96", light:"#FDE2C8"}, {dark:"#E8492D", light:"#C6D8C7"}, {dark:"#F03F35",light:"#B6E3E4"},{dark:"#EF3D4A",light:"#96CBD1"},{dark:"#015397",light:"#FD4344"},{dark:"#D83530",light:"#0BBCD6"},{dark:"#1B1D1C",light:"#EA1821"},{dark:"#28292B",light:"#FF0046"},{dark:"#FF4552",light:"#EFE8D8"},{dark:"#FD667C",light:"#CFD1DD"},{dark:"#19227D",light:"#F1C2B8"},{dark:"#162BF4",light:"#EEC0DB"},{dark:"#2D1FE8",light:"#BEA1A5"},{dark:"#16C37B",light:"#F4F4F4"},{dark:"#0E39B1",light:"#FFFFFF"},{dark:"#1B1D1C",light:"#A6CFE2"},{dark:"#371722",light:"#BBAB9B"},{dark:"#008E8F",light:"#C7C6C4"},{dark:"#CF2F88",light:"#DABAAF"},{dark:"#C02A1A",light:"#B6CABF"},{dark:"#B32B48",light:"#C5BEAA"},{dark:"#D31B33",light:"#FDF06E"},{dark:"#D13642",light:"#FDEDB2"},{dark:"#2A3571",light:"#1EC3BD"},{dark:"#181A27",light:"#E88565"},{dark:"#018FD3",light:"#F4C7EE"},{dark:"#1B1D1C",light:"#77EEDF"},{dark:"#1EC8A9",light:"#FFEFE5"},{dark:"#28292B",light:"#B1FDEA"},{dark:"#28292B",light:"#E57066"},{dark:"#28292B",light:"#EED974"},{dark:"#0A64C0",light:"#FBFE55"},{dark:"#168E96",light:"#FDE2C8"},{dark:"#21AD65",light:"#FEC8BE"},{dark:"#E44A66",light:"#D3E8E1"},{dark:"#4F3A4B",light:"#E75151"},{dark:"#112378",light:"#FBECCF"},{dark:"#01B28B",light:"#F5CCCF"},{dark:"#1B1D1C",light:"#9257A9"},{dark:"#FF5034",light:"#C6D7C7"},{dark:"#481B19",light:"#F02F3B"},{dark:"#169BA3",light:"#FFFDE7"},{dark:"#1539CF",light:"#F1D3D3"},{dark:"#FF2B93",light:"#7CE0E6"},{dark:"#3B755F",light:"#F2CB6C"},{dark:"#D36479",light:"#85CEBA"},{dark:"#481B19",light:"#9B8FFF"},{dark:"#0D3934",light:"#FFC5D6"},{dark:"#062AFA",light:"#BBFFBA"},{dark:"#5E30CF",light:"#99FFD0"},{dark:"#1A0BCA",light:"#FB9B2A"},{dark:"#F6748D",light:"#E5E8DC"},{dark:"#073EA7",light:"#90FFE4"},{dark:"#643387",light:"#F3735C"},{dark:"#009BC6",light:"#FFD15E"},{dark:"#202448",light:"#A48641"},{dark:"#181E46",light:"#D17C78"},{dark:"#0A506B",light:"#FEBA02"},{dark:"#0E2F56",light:"#FC3B2D"},{dark:"#6136BA",light:"#00FFC3"},{dark:"#54120A",light:"#EF5B0B"},{dark:"#DE10DE",light:"#FFD100"},{dark:"#32145D",light:"#FF8C8B"},{dark:"#1429C7",light:"#FF4D06"},{dark:"#1405FF",light:"#CDFF05"},{dark:"#1E3B34",light:"#FEBC00"},{dark:"#1E3B34",light:"#E10000"},{dark:"#112378",light:"#F64A00"},{dark:"#2C159D",light:"#C39D63"},{dark:"#8C23FF",light:"#00FDFF"},{dark:"#B03297",light:"#95D0FF"},{dark:"#44266D",light:"#14E1E3"},{dark:"#1E3B34",light:"#FF6B61"},{dark:"#502F7E",light:"#EDB200"},{dark:"#CD244A",light:"#EAC417"},{dark:"#6136BA",light:"#DABAAF"},{dark:"#1B1D1C",light:"#F1B908"},{dark:"#E5270E",light:"#7EBDC1"},{dark:"#F31354",light:"#12E2BA"},{dark:"#266691",light:"#FD6749"},{dark:"#B8237E",light:"#6DA1AE"},{dark:"#CC2E22",light:"#FFB812"},{dark:"#6614C8",light:"#DFDC02"},{dark:"#28292B",light:"#A646A7"},{dark:"#586C74",light:"#D2DB00"},{dark:"#6614C8",light:"#F25A10"},{dark:"#1E3B34",light:"#FF8C8B"},{dark:"#FF5100",light:"#B3E129"},{dark:"#821E74",light:"#FF8C8B"},{dark:"#7912D9",light:"#E289DE"},{dark:"#C43253",light:"#D3B738"},{dark:"#F7CE17",light:"#2B64A9"},{dark:"#FC6C11",light:"#1E3B34"},{dark:"#F7CE17",light:"#B8237E"}
        ], 
        messages:[
          {"title": "I made a Google Earth Game, you have to discover where the aerial photo was taken"},
          {"title": "I have worked several times for the educational area, as a freelance at Santillana and a UX Designer for Cerebriti"},
          {"title": "I had more than 50K readers for the article 'My UX Resource list' at Medium"},
          {"title": "Pen & Pencil are esential for me, then I jump to Trello, then to Design and then Code"},
          {"title": "Main problem I find on Ad Production is about compatibility between software or how to translate a designer work to code, I like Scratch!"},
          {"title": "As a travel photographer I have been to Netherlands, Berlin, London, Morocco, Philippines, NY, Mexico, Colombia and lots of places at Spain"},
          {"title": "My live is like a Lab,I discover new things and try to do them. Yeah, I´m a Maker!"},
          {"title": "Mainly I like PhotoWalks, going wherever, explore place and people, wait for golden hour, getting in touch with locals, have a beer."},
          {"title": "A freelance developer working wherever"},
          {"title": "A UX Designer migrated into Full Stack Developer"},
          {"title": "I don´t like Facebook, but I love React"},
          {"title": "I was one of the Flash boys making noise in the internet some years ago"},
          {"title": "So after 15 years working at online advertising industry I decided to install an AdBlocker (and I´m quite happy about it!)"},
          {"title": "I like surfing on the web, open every day about 50 websites, at nights, spend nice time there. I´ve been doing this for 15 years or more"},
          {"title": "I would say I am a Photographer focused on Travel, events and Stock Photo, but also I have made night photo, steel wool, conceptual or modelling."},
          {"title": "I´m sorry for designers but for me the Single Source of Truth is not Notion, but Github."},
          {"title": "Mainly I use Github as a resource and help, Medium for writing and discovering, Pinterest to collect, Twitter and Linkedin to stay tuned, and some new as DevTo and Observable."},
          {"title": "I won the third prize for photography for National Geographic and Ron Brugal a few years ago, in fact I was magazine cover."},
          {"title": "As I was giving support to Creative Agencies for years, I have a high quality network of freelance contacts."},
          {"title": "I am a Lifelong learner, Fictizia, Mr. Marcel School, Interaction Design Foundation, Ironhack and Udemy lastly."},
          {"title": "I'm really just a collector, I collect websites, images, articles, resources, Apps, and then organize them."},
          {"title": "Some icons and images from this website are from TheNounProject and Unsplash, see credits at Github."}, 
          {"title": "."}, 
          {"title": "."}, 
          {"title": "."}, 
          {"title": "."}, 
          {"title": "."}, 
          {"title": "Jim quickly realized that the beautiful gowns are expensive"}
        ]
    }

    constructor(props){
        super(props);
        this.state = {
          data:[],
          works:[],
          counter:0
        }
        this.initialSet = this.initialSet.bind(this);
        this.generateText = this.generateText.bind(this);
        this.changeText = this.changeText.bind(this);
        this.shuffleArray = this.shuffleArray.bind(this);
        this.tl = gsap.timeline({ repeat: -1 });
      }

    async componentDidMount(){
      //this._isMounted = true;
      //way 1
      const response = await fetch(`https://raw.githubusercontent.com/fernandocomet/website/master/fernandocomet/src/data/portfolio.json`);
      const json = await response.json();
      this.setState({ 
          data: json,
          counter: 0 
        });
      this.initialSet();

      //way 2
       /* fetch('https://raw.githubusercontent.com/fernandocomet/website/master/fernandocomet/src/data/portfolio.json')
          .then(response => response.json())
          .then(data => this.setState({ data }))
          .then(this.initialSet)*/
    }

    componentWillUnmount(){
        this.tl.kill();
    }

    shuffleArray(array){
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    initialSet(){
        this.shuffleArray(this.props.colors);
        this.shuffleArray(this.props.messages);
        let worksArr = [];
        // for (let i = 0; i < this.state.data.length ; i++){
        for (let i = 0; i < this.props.messages.length ; i++){
        //   worksArr.push(this.state.data[i].title)
          worksArr.push(this.props.messages[i].title)
        }
        this.setState({
          works: worksArr
        })
        
        //Here we go
        // var tl = gsap.timeline({ repeat: -1 });
        this.props.colors.forEach((color) => {
        this.tl.to("#message", { xPercent: -50, left: "50%", duration: 1, delay: 1 })
            .to("#bg", { backgroundColor: color.dark, duration: 1, delay: 3 })
            .to("#message", { color: color.light, duration: 2, delay: 0 })
            .add(this.generateText);
        });
    }

    generateText() {
        gsap.to("#message", { text: this.changeText(this.props.messages) });
    }

    changeText(arr) {
        console.log(this.state.counter);
        let counterChange = this.state.counter + 1;
        if (counterChange === this.props.messages.length) {
            counterChange = 0;
        }
        this.setState({ counter: counterChange })
        return this.props.messages[counterChange].title;
    }
    
    render(){
        return(
          <div id="bg">
            <h1 id="message">Fernando Comet</h1>
          </div>
        )
    }

}

export default Text;
