import React from 'react';


const ProductPage = () => {
  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <div className="col-xs-12 col-md-4">
          <div className="card">
            <div className="filter-group">
              <header className="card-header">
                <a
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_1"
                  aria-expanded="true"
                >
                  <i className="icon-control fa fa-chevron-down" />
                  <h6 className="title">Product type</h6>
                </a>
              </header>
              <div className="filter-content collapse show" id="collapse_1">
                <div className="card-body">
                  <form className="pb-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-light" type="button">
                          <i className="fa fa-search" />
                        </button>
                      </div>
                    </div>
                  </form>
                  <ul className="list-menu">
                    <li>
                      <a href="#">People </a>
                    </li>
                    <li>
                      <a href="#">Watches </a>
                    </li>
                    <li>
                      <a href="#">Cinema </a>
                    </li>
                    <li>
                      <a href="#">Clothes </a>
                    </li>
                    <li>
                      <a href="#">Home items </a>
                    </li>
                    <li>
                      <a href="#">Animals</a>
                    </li>
                    <li>
                      <a href="#">People </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="filter-group">
              <header className="card-header">
                <a
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_2"
                  aria-expanded="true"
                >
                  <i className="icon-control fa fa-chevron-down" />
                  <h6 className="title">Brands </h6>
                </a>
              </header>
              <div className="filter-content collapse show" id="collapse_2">
                <div className="card-body">
                  <label className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="custom-control-input"
                    />
                    <div className="custom-control-label">
                      Mercedes
                      <span className="badge bg-secondary float-end">120</span>
                    </div>
                  </label>
                  <label className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="custom-control-input"
                    />
                    <div className="custom-control-label">
                      Toyota
                      <b className="badge bg-secondary badge-light float-end">15</b>
                    </div>
                  </label>
                  <label className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="custom-control-input"
                    />
                    <div className="custom-control-label">
                      Mitsubishi
                      <b className="badge bg-secondary badge-light float-end">35</b>
                    </div>
                  </label>
                  <label className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="custom-control-input"
                    />
                    <div className="custom-control-label">
                      Nissan
                      <b className="badge bg-secondary badge-light float-end">89</b>
                    </div>
                  </label>
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <div className="custom-control-label">
                      Honda
                      <b className="badge bg-secondary badge-light float-end">30</b>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-group">
              
              <header className="card-header">
                <a
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_3"
                  aria-expanded="true"
                >
                  <i className="icon-control fa fa-chevron-down" />
                  <h6 className="title">Price range </h6>
                </a>
              </header>
              <div className="filter-content collapse show" id="collapse_3">
                <div className="card-body">
                  <input
                    type="range"
                    className="custom-range"
                    min={0}
                    max={100}
                    name
                  />
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label>Min</label>
                      <input
                        className="form-control"
                        placeholder="$0"
                        type="number"
                      />
                    </div>
                    <div className="form-group text-right col-md-6">
                      <label>Max</label>
                      <input
                        className="form-control"
                        placeholder="$1,0000"
                        type="number"
                      />
                    </div>
                  </div>
                  <button className="btn btn-block btn-primary mt-3">Apply</button>
                </div>
              </div>
            </div>
            <div className="filter-group">
              <header className="card-header">
                <a
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_4"
                  aria-expanded="true"
                >
                  <i className="icon-control fa fa-chevron-down" />
                  <h6 className="title">Sizes </h6>
                </a>
              </header>
              <div className="filter-content collapse show" id="collapse_4">
                <div className="card-body">
                  <label className="checkbox-btn">
                    <input type="checkbox" />
                    <span className="btn btn-light"> XS </span>
                  </label>
                  <label className="checkbox-btn">
                    <input type="checkbox" />
                    <span className="btn btn-light"> SM </span>
                  </label>
                  <label className="checkbox-btn">
                    <input type="checkbox" />
                    <span className="btn btn-light"> LG </span>
                  </label>
                  <label className="checkbox-btn">
                    <input type="checkbox" />
                    <span className="btn btn-light"> XXL </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-group">
              <header className="card-header">
                <a
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse_5"
                  aria-expanded="false"
                >
                  <i className="icon-control fa fa-chevron-down" />
                  <h6 className="title">More filter </h6>
                </a>
              </header>
              <div className="filter-content collapse show" id="collapse_5">
                <div className="card-body">
                  <label className="custom-control custom-radio">
                    <input
                      type="radio"
                      name="myfilter_radio"
                      defaultChecked
                      className="custom-control-input"
                    />
                    <div className="custom-control-label">Any condition</div>
                  </label>
                  <label className="custom-control custom-radio">
                    <input
                      type="radio"
                      name="myfilter_radio"
                      className="custom-control-input"
                    />
                    <div className="custom-control-label">Brand new </div>
                  </label>
                  <label className="custom-control custom-radio">
                    <input
                      type="radio"
                      name="myfilter_radio"
                      className="custom-control-input"
                    />
                    <div className="custom-control-label">Used items</div>
                  </label>
                  <label className="custom-control custom-radio">
                    <input
                      type="radio"
                      name="myfilter_radio"
                      className="custom-control-input"
                    />
                    <div className="custom-control-label">Very old</div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductPage;

