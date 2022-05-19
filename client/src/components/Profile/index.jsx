import "./styles.module.css";

const Profile = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		

<div className ="container" style={{padding:'2rem 5rem 5rem 5rem', lineHeight:'2rem' , fontFamily:'cursive'}}>
    <div className ="view-account">
        <section className ="module" style={{height:'max-height' , width:'max-width' , border:'black 100px'}}>
            <div className ="module-inner"  style={{boxShadow:'10px 0px hwb(169 23% 31%)'}}>
                <div className ="side-bar">
                <div style={{width:'8rem' , height:'8rem' , borderRadius:'50%' , backgroundColor:' hwb(169 23% 31%)' ,position:'relative'}}>

                    <div className ="user-info" style={{fontFamily:'cursive' ,position:'absolute' , zIndex:'10' , marginLeft:'3rem' , marginTop:'1rem'}}>
                       <h2>Preethi Ashok</h2>
                       <h3>|| Web Developer || </h3>
                       <h4>preethiashok05@gmail.com</h4>
                    </div>
                    
                </div>
                <div style={{float:'right' , padding:'10px',  overflow:'hidden'}}>
                        <h2>.....................................................................................................................................................................PROFILE.....</h2>
                    </div>
                </div>
                <div className ="content-panel" style={{marginTop:'5rem'}}>
                    <form className ="form-horizontal">

                        <fieldset className ="fieldset" style={{border:'rgba(2, 26, 47, 0.618) ' , borderRadius:'7px', marginBottom:'3rem',backgroundColor:'whitesmoke' ,width:'100%',}}>      
                            <h3 className ="fieldset-title" style={{marginLeft:'1rem'}}>Education</h3>

                            <div style={{margin:'auto',color:'grey', marginLeft:'2rem' , lineHeight:'1.5rem'}}>
                                <h4 > Sir M Visveswaraih Institute of Technology , Bangalore</h4>
                                <h5>B.E Information Science and technology</h5>
                            </div>
                        </fieldset>

                        <fieldset className ="fieldset"  style={{border:'rgba(2, 26, 47, 0.618) ' , borderRadius:'7px', marginBottom:'3rem',backgroundColor:'whitesmoke'}}>
                            <h3 className ="fieldset-title" style={{marginLeft:'1rem'}}>Contact Info</h3>

                            <div className ="form-group">
                                <div style={{margin:'auto', marginLeft:'2rem' , lineHeight:'1.5rem'}}>
                                    <h4 >Email <span style={{color:'grey', marginLeft:'2rem' }}>preethiashok05@gmail.com</span></h4>   
                                    <h4 >Mobile Number <span style={{color:'grey', marginLeft:'2rem' }}>6362438939</span></h4>       
                                    <h4 >Address <span style={{color:'grey', marginLeft:'2rem' }}>new airport road , Yelahanka old town , Bangalore Urban , Karnataka</span></h4>       
                                    <h4 >City <span style={{color:'grey', marginLeft:'2rem' }}>Bangalore</span></h4>       
                                    <h4 >State <span style={{color:'grey', marginLeft:'2rem' }}>Karnataka</span></h4>       
                                    <h4 >Country<span style={{color:'grey', marginLeft:'2rem' }}>India</span></h4>           
                                </div>
                            </div>
                            </fieldset>

                        <div className ="form-group">
                        <fieldset className ="fieldset" style={{border:'rgba(2, 26, 47, 0.618) ' , borderRadius:'7px', marginBottom:'3rem',backgroundColor:'whitesmoke'}}>

                            <h3 className ="fieldset-title" style={{marginLeft:'1rem'}}>Experience</h3>
                            <div className ="form-group" style={{marginLeft:'2rem'}}>
                               <h3>Worqhat - Internship</h3>
                               <div style={{margin:'auto', marginLeft:'2rem' , lineHeight:'1.5rem'}}>
                                    <h4 >Role <span style={{color:'grey', marginLeft:'2rem' }}>Web - Developer</span></h4>   
                                    <h4 >Description <span style={{color:'grey', marginLeft:'2rem' }}>Worked with admin system , Firestore Database , CRUD operations using Nodejs and Expressjs for the backend part and ejs for the frontend part.</span></h4>       
                                    <h4 >Start-Date<span style={{color:'grey', marginLeft:'2rem' }}>28th November 2021</span></h4>       
                                    <h4 >End-Date<span style={{color:'grey', marginLeft:'2rem' }}>30th December 2021</span></h4>       
                                </div>
                            </div>                             
                        </fieldset>
                        </div>

                       
                        <fieldset className ="fieldset"  style={{border:'rgba(2, 26, 47, 0.618) ' , borderRadius:'7px', marginBottom:'3rem',backgroundColor:'whitesmoke'}}>
                            <h3 className ="fieldset-title" style={{marginLeft:'1rem'}}>Get In Touch</h3>

                            <div className ="form-group">
                                <div style={{margin:'auto', marginLeft:'2rem' , lineHeight:'1.5rem'}}>
                                    <h4 >Linkedin<span style={{color:'grey', marginLeft:'2rem' }}>https://www.linkedin.com/in/preethi-ashok-95b370206</span></h4>   
                                    <h4 >Github<span style={{color:'grey', marginLeft:'2rem' }}>https://github.com/preethiashok05</span></h4>       
                                </div>
                            </div>
                            </fieldset>
                    </form>
                </div>
            </div>
        </section>
    </div>
</div>

	);
};

export default Profile;