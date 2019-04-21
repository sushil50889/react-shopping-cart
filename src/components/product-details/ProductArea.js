import React from 'react';

class ProductArea extends React.Component {
  render () {
    return(
	<div className="product_image_area">
		<div className="container">
			<div className="row s_product_inner">
				<div className="col-lg-6">
					<div className="s_Product_carousel">
						<div className="single-prd-item">
							<img className="img-fluid" src={require("../../img/category/s-p1.jpg")} alt=""/>
						</div>
						<div className="single-prd-item">
							<img className="img-fluid" src={require("../../img/category/s-p1.jpg")} alt=""/>
						</div>
						<div className="single-prd-item">
							<img className="img-fluid" src={require("../../img/category/s-p1.jpg")} alt=""/>
						</div>
					</div>
				</div>
				<div className="col-lg-5 offset-lg-1">
					<div className="s_product_text">
						<h3>Faded SkyBlu Denim Jeans</h3>
						<h2>$149.99</h2>
						<ul className="list">
							<li><a className="active" href="/"><span>Category</span> : Household</a></li>
							<li><a href="/"><span>Availibility</span> : In Stock</a></li>
						</ul>
						<p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
							something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
							during the winter.</p>
						<div className="product_count">
							<label htmlFor="qty">Quantity:</label>
							<input type="text" name="qty" id="sst" maxLength="12" defaultValue="1" title="Quantity:" className="input-text qty"/>
							<button className="increase items-count" type="button"><i className="lnr lnr-chevron-up"></i></button>
							<button className="reduced items-count" type="button"><i className="lnr lnr-chevron-down"></i></button>
						</div>
						<div className="card_area d-flex align-items-center">
							<a className="primary-btn" href="/">Add to Cart</a>
							<a className="icon_btn" href="/"><i className="lnr lnr lnr-diamond"></i></a>
							<a className="icon_btn" href="/"><i className="lnr lnr lnr-heart"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
  }
}

export default ProductArea;
