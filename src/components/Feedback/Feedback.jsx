import React, {useRef} from 'react'

import './feedback.css'
import {images} from '../../constants'

const Feedback = () => {

  const paper1 = useRef(null);
  const paper2 = useRef(null);
  const paper3 = useRef(null);
  const book = useRef(null);
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);

  let page;
  let currentLocation = 1;
  let numOfPapers = 3;
  let maxLocation = numOfPapers + 1;

  const nextPage = () => {
    if(currentLocation < maxLocation) {
      switch(currentLocation){
        case 1:
          paper1.current.style.zIndex = 1;   
          paper1.current.classList.add("flipped");
          openBook();
          break;
        case 2:
          paper2.current.classList.add("flipped");
          paper2.current.style.zIndex = 2;
          break;
        case 3:
          paper3.current.classList.add("flipped");
          paper3.current.style.zIndex = 3;
          closeBook();
          break;
        default: 
          throw new Error("unknown state");
      }
      currentLocation++;
    }
  }

  const prevPage = () => {
    if(currentLocation > 1){
      switch(currentLocation){
        case 2: 
          closeBook(true);
          paper1.current.classList.remove("flipped");
          paper1.current.style.zIndex = 3;
          break;
        case 3: 
          paper2.current.classList.remove("flipped");
          paper2.current.style.zIndex = 2;
          break;
        case 4: 
          openBook();
          paper3.current.classList.remove("flipped");
          paper3.current.style.zIndex = 1;
          break;
        default:
          throw new Error("unknown state");
      }
      currentLocation--;
    }
  }

  const openBook = () => {
    book.current.style.transform = "translateX(50%)";
    prevBtn.current.style.transform = "translateX(-200px)";
    nextBtn.current.style.transform = "translateX(200px)";
  }

  const closeBook = (isAtBegining) => {
    if(isAtBegining){
      book.current.style.transform = "translateX(0%)";
    } else {
      book.current.style.transform = "translateX(100%)";
    }
    prevBtn.current.style.transform = "translateX(0px)";
    nextBtn.current.style.transform = "translateX(0px)";
  }


  return (
    <div className='feedback-page container'>
      <h1 className='main-heading'>What Our Client Says</h1>

      <div className='book-animation'>
        <button id='prev-button' onClick={prevPage} ref={prevBtn}>
          Prev
        </button>

        <div className='book' ref={book}>
          
          <div className='paper' id='p1' ref={paper1}> 
            <div className='front'>
              <div id='f1' className='front-content'>
                <h1>Open The Client Review Book &gt;	&gt;	</h1>
                <img className='small-rose' src={images.roseHd} alt="" />
              </div>
            </div>

            <div className='back'>
              <div className='back-content' id='b1'>
                <div className='review'>
                  <h3>Joanne De Arc</h3>
                  <img src={images.joan} alt="joan" />
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='review'>
                <h3>Joanne De Arc</h3>
                  <img src={images.joan} alt="joan" />
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className='paper' id='p2' ref={paper2}> 
            <div className='front'>
              <div id='f2' className='front-content'>
                <h1>Front 2</h1>
              </div>
            </div>

            <div className='back'>
              <div className='back-content' id='b2'>
                <h1>Back 2</h1>
              </div>
            </div>
          </div>

          <div className='paper' id='p3' ref={paper3}> 
            <div className='front'>
              <div id='f3' className='front-content'>
                <h1>Front 3</h1>
              </div>
            </div>

            <div className='back'>
              <div className='back-content' id='b3'>
                <img src={images.roseHd} alt="" />
              </div>
            </div>
          </div>

        </div>

        <button id='next-button' onClick={nextPage} ref={nextBtn}>
          Next
        </button>
      </div>


    </div>
  )
}

export default Feedback