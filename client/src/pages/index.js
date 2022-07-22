import ListProduct from "../components/ListProduct/ListProduct";
import Slides from "../components/Slide/Slides";
import serviced from "../assets/images/serviced.jpg";


function Home() {
  console.log('render')

  return (
    <div>
        <Slides />
        <ListProduct />
        <div className="container">
          <div className="serviced">
            <div className="serviced_img">
              <img src={serviced} alt=""/>
            </div>
            <div className="serviced_content">
              <h3>DỊCH VỤ</h3>
              <h1>HÃY ĐỂ MOTOR VIET NAM CHĂM SÓC XE CỦA BẠN</h1>
              <p>
                Việc chăm sóc và bảo dưỡng thường xuyên sẽ giúp xe vận hành an toàn và mang lại cảm giác lái tối ưu. 
                Hãy trải nghiệm dịch vụ tại Revzone Yamaha Motor với quy trình chuyên nghiệp, 
                đội ngũ được đào tạo trực tiếp từ các chuyên gia Nhật Bản và các trang thiết bị chuyên dụng.
              </p>

              <div className="see_more">
                Xem thêm
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
