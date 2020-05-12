import React, { Component } from 'react';
import axios from 'axios';
class FormAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeList : false,
            activeDi : false,
            activeWa : false,
            CityList : "",
            DistrictList : "",
            WardList : "",
            provinceOrCity : "",
            district : "",
            ward : "",
            idTinh : "",
            QuanHuyenID : ""
        }
    }
    getDataprovinceOrCity = async () =>{
        return await axios({
            method : "GET",
            url : "https://localhost:5003/api/city",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }, 
            data : null
        }).then(resp =>{
            this.setState({
                CityList : resp.data.data.ltsItem
            })
        }).catch(err => {
            console.log(err);
        });
    }
    getDataDistrict = async (id) =>{
        return await axios({
            method : "GET",
            url : "https://localhost:5003/api/city/"+id+"/district",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }, 
            data : null
        }).then(resp =>{
            this.setState({
                DistrictList : resp.data.data
            })
        }).catch(err => {
            console.log(err);
        });
    }
    getDataWard = async (id) =>{
        return await axios({
            method : "GET",
            url : "https://localhost:5003/api/district/"+id+"/ward",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }, 
            data : null
        }).then(resp =>{
            this.setState({
                WardList : resp.data.data
            })
        }).catch(err => {
            console.log(err);
        });
    }
    handelChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    showList = () =>{
        var {activeList} = this.state;
        if(activeList){
            this.setState({
                activeList : false
            })
        }
        else{
            this.setState({
                activeList : true,
                activeDi : false,
                activeWa : false
            })
        }
    }

    showDi = () =>{
        var {activeDi} = this.state;
        if(activeDi){
            this.setState({
                activeDi : false
            })
        }
        else{
            this.setState({
                activeDi : true,
                activeList : false,
                activeWa : false
            })
        }
    }
    showWa = () =>{
        var {activeWa} = this.state;
        if(activeWa){
            this.setState({
                activeWa : false
            })
        }
        else{
            this.setState({
                activeWa : true,
                activeList : false,
                activeDi : false,
            })
        }
    }
    getValue = (value,id) =>{
        this.setState({
            provinceOrCity : value,
            district : "Chọn quận/huyện",
            ward : "Chọn phường/xã",
            idTinh : id
        })
        this.getDataDistrict(id)
    }
    getWard = (value) =>{
        this.setState({
            ward : value,
        })
    }
    getDistrict = (value,id) =>{
        this.setState({
           district : value,
           QuanHuyenID : id,
           ward : "Chọn phường/xã",
        })
        this.getDataWard(id)
    }
    showProvince =  () =>{
        var {CityList} = this.state;
        var result = "";
        if(CityList === ""){
            result = "";
            this.getDataprovinceOrCity();
        }
        else{
            result = CityList.map((tinh,index) =>{
                return (
                    <li key={index} className="dropdown-item" onClick={() => this.getValue(tinh.title,tinh.id)}>{tinh.title}</li>
                )
            })
        }
        return result;
    }
    showHuyen = ()=>{
        var {idTinh,DistrictList} = this.state;
        if(DistrictList === ""){
            this.getDataDistrict(idTinh)
        }
        else{
            var result = "";
            result = DistrictList.map((di,index)=>{
                if(parseInt(di.tinhThanhID) === idTinh){
                    return (
                        <li key={index} className="dropdown-item" onClick={() => this.getDistrict(di.title,di.id)}>{di.title}</li>
                    )
                }
                return result;
            })
            return result;
        }
    }
    showXaPhuong = ()=>{
        var {QuanHuyenID,WardList} = this.state;
        if(WardList === ''){
            this.getDataWard(QuanHuyenID)
        }
        else{
            var result = "";
            result = WardList.map((di,index)=>{
                if(parseInt(di.quanHuyenID)=== QuanHuyenID){
                    return (
                        <li key={index} className="dropdown-item" onClick={() => this.getWard(di.title)}>{di.title}</li>
                    )
                }
                return result;
            })
            return result;
        }
    }
    render() {
        var {activeList,activeDi,activeWa,district,provinceOrCity,ward} = this.state;
        var activeListA = activeList ? "block" : "none";
        var activeListB = activeDi ? "block" : "none";
        var activeListC = activeWa ? "block" : "none";
        var showTinh = provinceOrCity === "" ? "Chọn tỉnh" : provinceOrCity;
        var showHuyens = district === "" ? "Chọn quận/huyện" : district;
        var showXa = ward === "" ? "Chọn phường/xã" : ward;
        return (
            <form action="/" method="post">
                <div className="container">
                    <div className="form-left">
                        <label htmlFor="uname">
                            <span>Họ và tên</span>
                        </label>
                        <input className="username" type="text" placeholder="Nhập họ tên" name="fullname" />
                        <label htmlFor="psw">
                            <span>Số diện thoại</span>
                        </label>
                        <input className="pass" type="text" placeholder="Nhập số diện thoại" name="phonenumber" />
                    </div>
                    <div className="form-right">
                        <label htmlFor="psw">
                            <span>Tỉnh</span>
                        </label>
                        <span className="select-address" onClick={this.showList}>{showTinh}
                            <div className="dropdown-address" style={{display : activeListA}}>
                                {this.showProvince()}
                            </div>
                        </span>
                        <input className="pass" type="hidden" value={provinceOrCity} placeholder="Nhập địa chỉ" name="provinceOrCity" />
                        <label htmlFor="psw">
                            <span>Huyện/Quận</span>
                        </label>
                        <span className="select-address" onClick={this.showDi}>{showHuyens}
                            <div className="dropdown-address" style={{display : activeListB}}>
                                {this.showHuyen()}
                            </div>
                        </span>
                        <input className="pass" type="hidden" value={district} onChange={this.handelChange} name="district" />
                        <label htmlFor="psw">
                            <span>Xã/Phường</span>
                        </label>
                        <span className="select-address" onClick={this.showWa}>{showXa}
                            <div className="dropdown-address" style={{display : activeListC}}>
                                {this.showXaPhuong()}
                            </div>
                        </span>
                        <input className="pass" type="hidden" name="ward" placeholder="Nhập địa chỉ"/>
                        <label htmlFor="psw">
                            <span>Số nhà/Tên Đường
                                
                            </span>
                        </label>
                        <input className="pass" type="text" placeholder="Nhập địa chỉ" name="addressUser" />
                    </div>
                        <button className="login" type="button">Lưu thông tin</button>
                </div>
            </form>
        );
    }
}

export default FormAddress;