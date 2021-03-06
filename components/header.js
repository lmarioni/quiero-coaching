import Link from 'next/link'
import Head from 'next/head'

const Header = () => (
  <div>
    <Head>
      <link href="/static/css/black-dashboard.css?v=1.0.0" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
    </Head>
    <nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle d-inline">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <Link href="/">
              <a  className="navbar-brand" >quieros</a>
              </Link>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav ml-auto">
              <li className="search-bar input-group">
                <button className="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal"><i className="fas fa-search"></i>
                  <span className="d-lg-none d-md-block">Search</span>
                </button>
              </li>
              <li className="dropdown nav-item">
                <a href="javascript:void(0)" className="dropdown-toggle nav-link" data-toggle="dropdown">
                  <div className="notification d-none d-lg-block d-xl-block"></div>
                  <i className="far fa-bell"></i>
                  <p className="d-lg-none">
                    Notifications
                  </p>
                </a>
                <ul className="dropdown-menu dropdown-menu-right dropdown-navbar">
                  <li className="nav-link">
                    <a href="#" className="nav-item dropdown-item">Mike John responded to your email</a>
                  </li>
                  <li className="nav-link">
                    <a href="javascript:void(0)" className="nav-item dropdown-item">You have 5 more tasks</a>
                  </li>
                  <li className="nav-link">
                    <a href="javascript:void(0)" className="nav-item dropdown-item">Your friend Michael is in town</a>
                  </li>
                  <li className="nav-link">
                    <a href="javascript:void(0)" className="nav-item dropdown-item">Another notification</a>
                  </li>
                  <li className="nav-link">
                    <a href="javascript:void(0)" className="nav-item dropdown-item">Another one</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown nav-item">
                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                  <div className="photo">
                    <img src="/static/img/anime3.png" alt="Profile Photo" />
                  </div>
                  <b className="caret d-none d-lg-block d-xl-block"></b>
                  <p className="d-lg-none">
                    Log out
                  </p>
                </a>
                <ul className="dropdown-menu dropdown-navbar">
                  <li className="nav-link">
                    <a href="javascript:void(0)" className="nav-item dropdown-item">Profile</a>
                  </li>
                  <li className="nav-link">
                    <a href="javascript:void(0)" className="nav-item dropdown-item">Settings</a>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li className="nav-link">
                    <a href="javascript:void(0)" className="nav-item dropdown-item">Log out</a>
                  </li>
                </ul>
              </li>
              <li className="separator d-lg-none"></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="modal modal-search fade" id="searchModal" role="dialog" aria-labelledby="searchModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="SEARCH" />
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="tim-icons icon-simple-remove"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
  </div>
)

export default Header