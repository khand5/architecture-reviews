import React from "react";
import "./ObjectPanel.css";
import cathedral from "./cathedral.jpeg";

class ObjectPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ProfilePanel-container">
        <div className="ProfilePanel-imagecontainer">
          <img
            className="ProfilePanel-image"
            src={cathedral}
            alt="Cathedral"
          ></img>
        </div>
        <div className="ProfilePanel-gmapcontainer">
          <div className="ProfilePanel-gmapcanvas">
            <iframe
              title="GoogleMapsIFrame"
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Caterbury%20Cathedral&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>

        <div className="ProfilePanel-data-container">
          <div className="ProfilePanel-title">
            <div>
              <h1>Canterbury Cathedral: A Lorem Ipsum Architecture Review</h1>
            </div>
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

          <div className="ProfilePanel-author-footer">
            <p className="ProfilePanel-author-footer-item">
              Authored by: Lorem Ipsum PEng., PhD, Masters Civil Design.
            </p>
            <p className="ProfilePanel-author-footer-item">
              Review Score: ★★★★★
            </p>
            <p className="ProfilePanel-author-footer-item">
              User Average Score: 9.87/10
            </p>
          </div>

          <div className="ProfilePanel-author-footer-interactive">
            <button className="ProfilePanel-author-footer-item-button fa fa-thumbs-up" />
            <button className="ProfilePanel-author-footer-item-button fa fa-thumbs-down" />
            <button className="ProfilePanel-author-footer-item-button fa fa-heart" />
            <button className="ProfilePanel-author-footer-item-button fa fa-comment" />
          </div>
        </div>

        <div className="ProfilePanel-userreviews-container">
          <div className="ProfilePanel-userrewviews-review">
            <div className="ProfilePanel-userreview-title">
              <h3>Object Name: Another Perspective</h3>
            </div>
            <div className="ProfilePanel-userreview-metadata">
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
            <p className="ProfilePanel-userreview-comment">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              elit feugiat, fringilla felis vel, volutpat risus. Etiam non massa
              eleifend, tristique dui non, vestibulum risus. Vestibulum vel
              mollis ipsum. Donec faucibus sapien eu neque imperdiet, ac
              ullamcorper elit lacinia. In hac habitasse platea dictumst.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Suspendisse et volutpat augue.
            </p>

            <div className="ProfilePanel-userreviews-interactive">
              <button className="ProfilePanel-userreviews-item-button fa fa-thumbs-up" />
              <button className="ProfilePanel-userreviews-item-button fa fa-thumbs-down" />
              <button className="ProfilePanel-userreviews-item-button fa fa-heart" />
              <button className="ProfilePanel-userreviews-item-button fa fa-comment" />
              <p className="ProfilePanel-userreview-username">
                Submitted by: Daren Armstrong
              </p>
            </div>
          </div>

          <div className="ProfilePanel-userrewviews-review">
            <div className="ProfilePanel-userreview-title">
              <h3>Object Name: Another Perspective</h3>
            </div>
            <div className="ProfilePanel-userreview-metadata">
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
            <p className="ProfilePanel-userreview-comment">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              elit feugiat, fringilla felis vel, volutpat risus. Etiam non massa
              eleifend, tristique dui non, vestibulum risus. Vestibulum vel
              mollis ipsum. Donec faucibus sapien eu neque imperdiet, ac
              ullamcorper elit lacinia. In hac habitasse platea dictumst.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Suspendisse et volutpat augue.
            </p>

            <div className="ProfilePanel-userreviews-interactive">
              <button className="ProfilePanel-userreviews-item-button fa fa-thumbs-up" />
              <button className="ProfilePanel-userreviews-item-button fa fa-thumbs-down" />
              <button className="ProfilePanel-userreviews-item-button fa fa-heart" />
              <button className="ProfilePanel-userreviews-item-button fa fa-comment" />
              <div className="ProfilePanel-userreview-username">
                Submitted by: Junhao Wang
              </div>
            </div>
          </div>

          <div className="ProfilePanel-userrewviews-review">
            <div className="ProfilePanel-userreview-title">
              <h3>Object Name: Another Perspective</h3>
            </div>
            <div className="ProfilePanel-userreview-metadata">
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
            <p className="ProfilePanel-userreview-comment">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              elit feugiat, fringilla felis vel, volutpat risus. Etiam non massa
              eleifend, tristique dui non, vestibulum risus. Vestibulum vel
              mollis ipsum. Donec faucibus sapien eu neque imperdiet, ac
              ullamcorper elit lacinia. In hac habitasse platea dictumst.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Suspendisse et volutpat augue.
            </p>

            <div className="ProfilePanel-userreviews-interactive">
              <button className="ProfilePanel-userreviews-item-button fa fa-thumbs-up" />
              <button className="ProfilePanel-userreviews-item-button fa fa-thumbs-down" />
              <button className="ProfilePanel-userreviews-item-button fa fa-heart" />
              <button className="ProfilePanel-userreviews-item-button fa fa-comment" />
              <div className="ProfilePanel-userreview-username">
                Submitted by: Junhao Wang
              </div>
            </div>
          </div>

          <div className="ProfilePanel-userrewviews-review">
            <div className="ProfilePanel-userreview-title">
              <h3>Object Name: Another Perspective</h3>
            </div>
            <div className="ProfilePanel-userreview-metadata">
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
            <p className="ProfilePanel-userreview-comment">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              elit feugiat, fringilla felis vel, volutpat risus. Etiam non massa
              eleifend, tristique dui non, vestibulum risus. Vestibulum vel
              mollis ipsum. Donec faucibus sapien eu neque imperdiet, ac
              ullamcorper elit lacinia. In hac habitasse platea dictumst.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Suspendisse et volutpat augue.
            </p>

            <div className="ProfilePanel-userreviews-interactive">
              <button className="ProfilePanel-userreviews-item-button fa fa-thumbs-up" />
              <button className="ProfilePanel-userreviews-item-button fa fa-thumbs-down" />
              <button className="ProfilePanel-userreviews-item-button fa fa-heart" />
              <button className="ProfilePanel-userreviews-item-button fa fa-comment" />
              <div className="ProfilePanel-userreview-username">
                Submitted by: Junhao Wang
              </div>
            </div>
          </div>
          <div className="ProfilePanel-userrewviews-review">
            <div className="ProfilePanel-userreview-title">
              <h3>Object Name: Another Perspective</h3>
            </div>
            <div className="ProfilePanel-userreview-metadata">
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
            <p className="ProfilePanel-userreview-comment">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              elit feugiat, fringilla felis vel, volutpat risus. Etiam non massa
              eleifend, tristique dui non, vestibulum risus. Vestibulum vel
              mollis ipsum. Donec faucibus sapien eu neque imperdiet, ac
              ullamcorper elit lacinia. In hac habitasse platea dictumst.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Suspendisse et volutpat augue.
            </p>

            <div className="ProfilePanel-userreviews-interactive">
              <button className="ProfilePanel-userreviews-item-button fa fa-thumbs-up" />
              <button className="ProfilePanel-userreviews-item-button fa fa-thumbs-down" />
              <button className="ProfilePanel-userreviews-item-button fa fa-heart" />
              <button className="ProfilePanel-userreviews-item-button fa fa-comment" />
              <div className="ProfilePanel-userreview-username">
                Submitted by: Junhao Wang
              </div>
            </div>
          </div>
          <div className="ProfilePanel-userrewviews-review">
            <div className="ProfilePanel-userreview-title">
              <h3>Object Name: Another Perspective</h3>
            </div>
            <div className="ProfilePanel-userreview-metadata">
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
            <p className="ProfilePanel-userreview-comment">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              elit feugiat, fringilla felis vel, volutpat risus. Etiam non massa
              eleifend, tristique dui non, vestibulum risus. Vestibulum vel
              mollis ipsum. Donec faucibus sapien eu neque imperdiet, ac
              ullamcorper elit lacinia. In hac habitasse platea dictumst.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Suspendisse et volutpat augue.
            </p>

            <div className="ProfilePanel-userreviews-interactive">
              <button className="ProfilePanel-userreviews-item-button fa fa-thumbs-up" />
              <button className="ProfilePanel-userreviews-item-button fa fa-thumbs-down" />
              <button className="ProfilePanel-userreviews-item-button fa fa-heart" />
              <button className="ProfilePanel-userreviews-item-button fa fa-comment" />
              <div className="ProfilePanel-userreview-username">
                Submitted by: Junhao Wang
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ObjectPanel;
