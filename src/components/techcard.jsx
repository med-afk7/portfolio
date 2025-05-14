import '../css/TechCard.css'




function  TechCard({Techsrc , Techname , Techdis}){

  



return(


<><div className='tech-card'>
    <div className='pic-name'>
<img src ={Techsrc} className='tech-image'></img>
<h3>{Techname}</h3>
</div>
<p >{Techdis}</p>
</div>
</>
);
    


}

export default TechCard