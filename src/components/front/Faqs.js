import React from 'react';

class Collapsible extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           open: false
       }
       this.togglePanel = this.togglePanel.bind(this);
   }

   togglePanel(e){
       this.setState({open: !this.state.open})
   }

   componentDidUpdate(){
       
   }

   render() {
     return (<div>
       <div onClick={(e)=>this.togglePanel(e)} className='toggle-title'>
           {this.props.title}</div>
       {this.state.open ? (
           <div className='content'>
               {this.props.children}
           </div>
           ) : null}
     </div>);
   }
 }

function Faqs() {
   
   return (
   //    <div>
   //      <Collapsible title="Header">
   //        <div> <p>Content of Collapsible</p>
   //        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
   //    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
   //    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
   //    commodo consequat.</p>
          
   //        </div>
   //      </Collapsible>
   //  </div>
        <div>
            <div className="ttm-page-title-row">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="title-box ttm-textcolor-white">
                        <div className="page-title-heading">
                           <h1 className="title">Faq</h1>
                        </div>
                        <div className="breadcrumb-wrapper">
                           <div className="container">
                              <div className="breadcrumb-wrapper-inner">
                                 <span>
                                 <a title="Go to Home." href="index.html" className="home"><i className="themifyicon ti-home"></i>&nbsp;&nbsp;Home</a>
                                 </span>
                                 <span className="ttm-bread-sep">&nbsp; | &nbsp;</span>
                                 <span>Faq</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>                   
         </div>
         <div className="site-main">
            <section className="ttm-row break-991-colum ttm-bgcolor-white clearfix">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="mb-35">
                           <h2 className="ttm-textcolor-skincolor ">Frequently Asked Questions</h2>
                           <p>Below you’ll find answers to some of the most frequently asked questions at Tectxon. We are constantly adding most asked question to this page so if you have a question and don’t see your answer, don’t hesitate to email us at <a href="mailto:care@myvacc.in" target="_blank">care@myvacc.in</a></p>
                        </div>
                        <div className="wrap-acadion">
                           <div className="accordion">
                              <div className="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey active">
                                 <Collapsible title="Why immunize?">
                                    <p>Diseases are becoming rare with vaccinations in India. We have eradicated diseases like Polio in India with regular mass vaccination drives. Various developed countries have reduced incidents of vaccine preventable diseases.</p>
                                 </Collapsible>
                              </div>
                              <div className="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey active">
                                 <Collapsible title="How does herd immunity work?">
                                    <p>When most of the individuals are immunised, it indirectly protects the unvaccinated individuals or for persons who could not develop immunity after vaccination. As we increase vaccination of people, herd immunity increases. But the vaccinated population should be very high to count on herd immunity.</p>
                                 </Collapsible>
                              </div>
                              <div className="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey active">
                                 <Collapsible title="How important it is to vaccinate children?">
                                    <p>Vaccines have antigens which are either weak or killed . Hence they will not cause disease but they will induce good immunity against the disease. You can therefore prevent the child from getting sick.
                                       Newborns get antibodies from their mothers and breast milk however this immunity fades by first birthday. Vaccination at home will reduce the costs, and also parents to lose time from work.</p>
                                 </Collapsible>
                              </div>
                              <div className="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey active">
                                 <Collapsible title="Are vaccines safe?">
                                    <p>In India children have been receiving vaccines safely each year. Very rarely incidences of any worrying side effects have been reported. Common side effects are pain ,swelling at the injection site or fever.</p>
                                 </Collapsible>
                              </div>
                              <div className="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey active">
                                 <Collapsible title="Why do vaccination start early?">
                                    <p>The recommended schedule is designed considering disease epidemiology and safety of the vaccines to get immunity in infants early in life to prevent consequences of the diseases which can also be life threatening.</p>
                                 </Collapsible>
                              </div>
                              <div className="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey active">
                                 <Collapsible title="Should we vaccinate the child with illness?">
                                    <p>Discuss with the doctor.Vaccination can be given with cold, cough, diarrhoea.</p>
                                 </Collapsible>
                              </div>
                              <div className="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey active">
                                 <Collapsible title="What are the checklist  before vaccinations for parents ?">
                                    <p>Immunisation record. Learn about benefits and risks with the vaccines. Support your child. Be honest, explain shots will sting or pinch. Avoid using shots as trading tool to get the child to do things like, eating. Remind them vaccines keep them healthy.</p>
                                 </Collapsible>
                              </div>
                              <div className="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey active">
                                 <Collapsible title="How to support babies while vaccinations?">
                                    <p>Distract the child by singing, cuddling or talking. Smile and make eye contact with the child. Comfort the child with a book or a favourite toy.</p>
                                 </Collapsible>
                              </div>
                              <div className="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey active">
                                 <Collapsible title="What to do after vaccination?">
                                    <p>Hug your child, praise your child, make skin to skin contact. Babies can be breast fed. Older children can be given sweet beverages.</p>
                                 </Collapsible>
                              </div>
                              <div className="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey active">
                                 <Collapsible title="What care needs to be given post vaccinations ?">
                                    <p>Cool damp cloth can reduce soreness and or swelling. Reduce fever with cool sponge bath. Offer liquids more often. Paracetamol can be given as prescribed by the doctor for fever and relieving pain. Any concerns, please contact the doctor.</p>
                                 </Collapsible>
                              </div>

                              <div className="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey active">
                                 <Collapsible title="How to hold the child during thr vaccinations?">
                                    <p>A parents embrace prevents children from moving their arms and legs during vaccinations, reduce fright and nurture and comfort the child. You can anchor the child legs between your thighs. For infants you can hold the child on your lap, place the arm under the armpit and hold as you hug the child. Anchor the feet between your thighs.</p>
                                 </Collapsible>
                              </div>
                              <div className="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey active">
                                 <Collapsible title="Can antibiotics affect your vaccinations?">
                                    <p>Children taking antibiotics for mild infection can take vaccinations. However you can consult the doctor if any doubts.</p>
                                 </Collapsible>
                              </div>
                              <div className="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey active">
                                 <Collapsible title="What should the vaccinator know before giving vaccines to the child?">
                                    <p>Inform if child has fever, any illnesses, bleeding disorder, any allergic reaction to previous immunisation, any medications the child is on.</p>
                                 </Collapsible>
                              </div>
                              <div className="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey active">
                                 <Collapsible title="How important it is to vaccinate children?">
                                    <p>Prepare the child for vaccinations by talking with them.Tasting something sweet can reduce pain after vaccination. Breastfeed smaller babies.Cooling spray can be used or an pain 
                                       relieving ointment can make the child comfortable.Remain calm as smart kids can react if they pickup parental anxiety.Child can hold favourite things like blankets , books or toys. Distract your child with a song or a story. Big kids need support too.You can ask them to breathe deeply and feel the pain going off. Hug and cuddle them.</p>
                                 </Collapsible>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
        </div>
    );
}

export default Faqs;