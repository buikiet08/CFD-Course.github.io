import React from 'react'

function Coin() {
    return (
        <div classname="tab5 cointab">
            <div classname="coininfo">
                <div classname="coininfo__box">
                    <h3><strong>Thông tin COIN</strong></h3>
                    <div classname="coininfo__box-ct">
                        <div>
                            <img src="img/cfd-coin.png" alt="" />
                            <p>Bạn có <strong>300</strong> COIN</p>
                        </div>
                    </div>
                </div>
                <div classname="coininfo__box">
                    <h3><strong>Đổi COIN</strong></h3>
                    <div classname="coininfo__box-ct">
                        <label classname="checkcontainer">
                            Voucher Tiki 100k
                            <input type="radio" name="radio" />
                            <span classname="checkmarkradio">
                            </span></label>
                        <label classname="checkcontainer">
                            Voucher Tiki 200k
                            <input type="radio" name="radio" />
                            <span classname="checkmarkradio">
                            </span></label>
                        <label classname="checkcontainer">
                            Voucher Tiki 500k
                            <input type="radio" name="radio" />
                            <span classname="checkmarkradio">
                            </span></label>
                        <label classname="checkcontainer">
                            Thẻ nạp điện thoại 100k
                            <input type="radio" name="radio" />
                            <span classname="checkmarkradio">
                            </span></label>
                        <label classname="checkcontainer">
                            Thẻ nạp điện thoại 200k
                            <input type="radio" name="radio" />
                            <span classname="checkmarkradio">
                            </span></label>
                        <label classname="checkcontainer">
                            Thẻ nạp điện thoại 500k
                            <input type="radio" name="radio" />
                            <span classname="checkmarkradio">
                            </span></label>
                        <small><i>*Bạn có thể đổi COIN 1 lần</i></small>
                    </div>
                    <a href="javascript:void(0)" classname="btn main">Đổi COIN</a>
                </div>
            </div>
            <div classname="coinhistory">
                <h3><strong>Lịch sử COIN</strong></h3>
                {'{'}/* <p>Chưa sử dụng COIN</p> */{'}'}
                <div classname="itemhistory">
                    <div classname="td"><strong>COIN</strong></div>
                    <div classname="td"><strong>Thời gian</strong></div>
                    <div classname="td"><strong>Nội dung</strong></div>
                    <div classname="td"><strong>Trạng thái</strong></div>
                </div>
                <div classname="itemhistory">
                    <div classname="td"><span classname="coin red">-300</span></div>
                    <div classname="td">09/09/2020</div>
                    <div classname="td">Giới thiệu khóa học cho học viên mới</div>
                    <div classname="td">Đã chấp nhận</div>
                </div>
                <div classname="itemhistory">
                    <div classname="td"><span classname="coin">+300</span></div>
                    <div classname="td">18/10/2020</div>
                    <div classname="td">Dùng COIN để quy đổi sang Voucher Tiki</div>
                    <div classname="td">Đã chấp nhận</div>
                </div>
                <div classname="itemhistory">
                    <div classname="td"><span classname="coin red">-300</span></div>
                    <div classname="td">18/10/2020</div>
                    <div classname="td">Dùng COIN để đổi sang Thẻ nạp điện thoại</div>
                    <div classname="td">Chờ duyệt</div>
                </div>
            </div>
        </div>
    )
}

export default Coin