import React from "react";
import "./ObjectPanel.css";

import Carousel, { Modal, ModalGateway } from "react-images";
import UserComment from "../../UserComment/UserComment";

import cathedral01 from "./images/canterbury-cathedral-01.jpg";
import cathedral02 from "./images/canterbury-cathedral-02.jpg";
import cathedral03 from "./images/canterbury-cathedral-03.jpg";
import cathedral04 from "./images/canterbury-cathedral-04.jpeg";
import cathedral05 from "./images/canterbury-cathedral-05.jpeg";
import cathedral06 from "./images/canterbury-cathedral-06.jpeg";
import cathedral07 from "./images/canterbury-cathedral-07.jpg";
import cathedral08 from "./images/canterbury-cathedral-08.jpeg";
import cathedral09 from "./images/canterbury-cathedral-09.jpeg";
import cathedral10 from "./images/canterbury-cathedral-10.jpg";
import cathedral11 from "./images/canterbury-cathedral-11.jpeg";
import cathedral12 from "./images/canterbury-cathedral-12.jpg";
import cathedral13 from "./images/canterbury-cathedral-13.jpg";
import cathedral14 from "./images/canterbury-cathedral-14.jpg";
import cathedral15 from "./images/canterbury-cathedral-15.jpg";
import cathedral16 from "./images/canterbury-cathedral-16.jpg";
import cathedral17 from "./images/canterbury-cathedral-17.jpeg";
import cathedral18 from "./images/canterbury-cathedral-18.jpg";

const images = [
  { src: cathedral01 },
  { src: cathedral02 },
  { src: cathedral03 },
  { src: cathedral04 },
  { src: cathedral05 },
  { src: cathedral06 },
  { src: cathedral07 },
  { src: cathedral08 },
  { src: cathedral09 },
  { src: cathedral10 },
  { src: cathedral11 },
  { src: cathedral12 },
  { src: cathedral13 },
  { src: cathedral14 },
  { src: cathedral15 },
  { src: cathedral16 },
  { src: cathedral17 },
  { src: cathedral18 }
];

class ObjectProfilePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }

  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  };

  render() {
    const { modalIsOpen } = this.state;

    return (
      <div className="ProfilePanel-container">
        <div className="ProfilePanel-titlecontainer">
          <h1>The Canterbury Cathedral</h1>
          <div>Location: Canterbury, Kent</div>
          <div>Country: England</div>
          <div>Denomination: Church of England</div>
        </div>
        <div className="ImageGallery-container">
          <div
            onClick={() => this.setState({ modalIsOpen: true })}
            style={{
              backgroundImage: `url(${cathedral01})`
            }}
            className="ImageGallery-image"
          ></div>
          <div
            onClick={() => this.setState({ modalIsOpen: true })}
            style={{
              backgroundImage: `url(${cathedral12})`
            }}
            className="ImageGallery-image"
          ></div>
          <div
            onClick={() => this.setState({ modalIsOpen: true })}
            style={{
              backgroundImage: `url(${cathedral14})`
            }}
            className="ImageGallery-image"
          ></div>
          <div
            onClick={() => this.setState({ modalIsOpen: true })}
            style={{
              backgroundImage: `url(${cathedral09})`
            }}
            className="ImageGallery-image"
          ></div>
        </div>
        <ModalGateway>
          {modalIsOpen ? (
            <Modal onClose={this.toggleModal}>
              <Carousel views={images} />
            </Modal>
          ) : null}
        </ModalGateway>
        <div className="ProfilePanel-data-container">
          <div className="ProfilePanel-review-title">
            <h3>Canterbury Cathedral: A Lorem Ipsum Architecture Review</h3>
          </div>
          <div className="ProfilePanel-metadata">
            <p>Last Updated: September 1st, 2019</p>
            <p>219,291 views</p>
            <p>
              <i className="fa fa-thumbs-up"></i> 9,231
            </p>
            <p>
              <i className="fa fa-thumbs-down"></i> 11
            </p>
            <p>
              <i className="fa fa-heart"></i> 1,231
            </p>
          </div>
          <div className="ProfilePanel-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              elit feugiat, fringilla felis vel, volutpat risus. Etiam non massa
              eleifend, tristique dui non, vestibulum risus. Vestibulum vel
              mollis ipsum. Donec faucibus sapien eu neque imperdiet, ac
              ullamcorper elit lacinia. In hac habitasse platea dictumst.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Suspendisse et volutpat augue. Vivamus euismod et arcu hendrerit
              sodales. Donec quis mattis lectus, eget lobortis urna.
            </p>

            <p>
              Quisque laoreet elit ipsum, vitae facilisis felis interdum id.
              Donec fermentum eget quam vel dictum. Maecenas in scelerisque
              quam. Suspendisse efficitur tellus vel turpis vehicula, quis
              tristique nisi pretium. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia Curae; Sed eleifend,
              sapien a maximus placerat, lectus diam dignissim neque, quis
              sollicitudin velit urna ac odio. Etiam nec efficitur ante.
              Vestibulum porttitor urna eu risus tristique elementum.
            </p>

            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Vivamus ultricies finibus lacus
              vitae facilisis. Nulla facilisi. Nam pulvinar nibh nulla, ut
              rutrum velit venenatis vitae. Nunc ut mauris pulvinar, luctus orci
              in, semper arcu. Nunc ac libero at lectus ultricies pharetra in id
              lectus. Mauris maximus auctor aliquet. Quisque lobortis venenatis
              lacinia. Nullam nec justo sapien. Duis tincidunt nulla in metus
              ornare ornare.
            </p>
          </div>
        </div>

        <div className="ProfilePanel-summary-container">
          <div className="ProfilePanel-summary-statbox">
            <div className="ProfilePanel-summary-header">
              Review Council Submission Lead
            </div>
            John Davis
            <br />
            P.Eng. PhD. MSc.
          </div>

          <div className="ProfilePanel-summary-statbox">
            <div className="ProfilePanel-summary-header">PRESERVATION:</div>
            <div className="ProfilePanel-summary-body">98%</div>
          </div>

          <div className="ProfilePanel-summary-statbox">
            <div className="ProfilePanel-summary-header">Public-OVERALL</div>
            <div className="ProfilePanel-summary-body">93/100</div>
          </div>

          <div className="ProfilePanel-summary-rating-statbox">
            <div className="ProfilePanel-summary-header">
              GAC-PHENOMENON Rating
            </div>
            <div className="ProfilePanel-summary-body">
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
            </div>
          </div>
        </div>

        {/* GOOGLE MAPS CONTAINER */}
        <div className="ProfilePanel-gmapcontainer">
          <div className="ProfilePanel-gmapcontainer-label">
            COORDINATES: 51.2798° N, 1.0828° E
          </div>
          <div className="ProfilePanel-gmapcanvas">
            <iframe
              title="GoogleMapsIFrame"
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Caterbury%20Cathedral&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="auto"
            ></iframe>
          </div>
          <div className="ProfilePanel-gmapcontainer-label">
            COORDINATES: 51.2798° N, 1.0828° E
          </div>
        </div>
        <div className="ProfilePanel-userreviews-interactive-container">
          <form action="">
            <textarea
              type="textarea"
              rows="4"
              cols="150"
              placeholder="Add public comment..."
              className="ProfilePanel-userreviews-interactive-textarea"
            ></textarea>
          </form>
          <button className="ProfilePanel-userreviews-interactive-comment-button fa fa-comment-o"></button>
        </div>
        <div className="ProfilePanel-userreviews-container">
          <div className="ProfilePanel-userreviews-column">
            <UserComment
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula
              dictum dictum. Donec non massa dictum, lobortis leo sit amet, congue
              lorem. Nunc ex augue, iaculis et dui hendrerit, ullamcorper mollis
              elit. Aenean scelerisque varius malesuada. Vivamus at felis urna.
              Etiam volutpat consectetur enim, a suscipit sapien dapibus sed.
              Nulla elementum, nunc in lacinia dapibus, nunc lectus suscipit urna,
              nec tristique augue enim quis massa. Cras egestas lorem nec velit
              commodo auctor. Phasellus nec elit sit amet metus condimentum
              pulvinar sed non nisl."
            />
          </div>
          <div className="ProfilePanel-userreviews-column">
            <UserComment
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula
              dictum dictum. Donec non massa dictum, lobortis leo sit amet, congue
              lorem. Nunc ex augue, iaculis et dui hendrerit, ullamcorper mollis
              elit. "
            />
            <UserComment
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula
              dictum dictum. Donec non massa dictum, lobortis leo sit amet, congue
              lorem. Nunc ex augue, iaculis et dui hendrerit, ullamcorper mollis
              elit. "
            />
          </div>
          <div className="ProfilePanel-userreviews-column">
            <UserComment
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula
              dictum dictum. Donec non massa dictum, lobortis leo sit amet, congue
              lorem. Nunc ex augue, iaculis et dui hendrerit, ullamcorper mollis
              elit. Aenean scelerisque varius malesuada. Vivamus at felis urna.
              Etiam volutpat consectetur enim, a suscipit sapien dapibus sed.
              Nulla elementum, nunc in lacinia dapibus, nunc lectus suscipit urna,
              nec tristique augue enim quis massa. Cras egestas lorem nec velit
              commodo auctor. Phasellus nec elit sit amet metus condimentum
              pulvinar sed non nisl. Quisque felis ante, tincidunt blandit ex
              vitae, vulputate tristique leo. Praesent eu ante semper ex malesuada
              porttitor sed in lorem. Cras cursus est imperdiet arcu hendrerit
              tempor."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ObjectProfilePanel;
