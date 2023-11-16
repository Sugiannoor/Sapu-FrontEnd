import { Link } from "react-router-dom";
import { ButtonElement } from "../../../components/elements/button";
import FooterComponent from "../../../components/elements/footer/FooterComponent";
import { NavbarComponent } from "../../../components/navbar";
import "./css/beranda.css";
import { BsCashCoin } from "react-icons/bs";
import {LuPalmtree} from 'react-icons/lu'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md'

const Beranda = () => {
  return (
    <>
      <NavbarComponent/>
      <div className="container-fluid mt-5">
        <div className="d-flex gap-4 align-items-center">
          <img
            src="./src/assets/hero-beranda.webp"
            className="gambar-hero-beranda"
          />
          <div className="deskripsi">
            <h1 className="header-beranda">
              Raih Penghasilan tambahan dan Tingkatkan Lingkungan Bersih
            </h1>
            <p className="deskripsi-beranda">Yuk Sapu lingkungan kita!</p>
            <Link to="/login">
              <ButtonElement className="btn btn-success">Mulai</ButtonElement>
            </Link>
          </div>
        </div>  
      </div>
      <div className="container-fluid bg-white mt-5 py-4">
        <h2 className="section-fitur text-center">Fitur</h2>
        <hr className="line-header"/>
        <div className="card-fitur d-flex gap-4 justify-content-center">
            <div className="card">
                <div className="card-body">
                    <div className="icon-fitur-beranda">
                    <BsCashCoin size={30} color="white"/>
                    </div>
                    <div className="deskripsi-fitur-beranda">
                        Meningkatkan Penghasilan
                    </div>
                </div> 
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="icon-fitur-beranda">
                    <LuPalmtree size={30} color="white"/>
                    </div>
                    <div className="deskripsi-fitur-beranda">
                        Meningkatkan Kebersihan Lingkungan
                    </div>
                </div> 
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="icon-fitur-beranda">
                    <MdOutlineProductionQuantityLimits size={30} color="white"/>
                    </div>
                    <div className="deskripsi-fitur-beranda">
                        Membantu Membuat Product Baru
                    </div>
                </div> 
            </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Beranda;
