import { TYPE } from "./enum";
import NewsPost from "../models/NewsPost";

export const DATA_TAG_POST_HOME = [
  {
    tag: "Tinhyeu",
    selected: false
  },
  {
    tag: "WorldCup",
    selected: true
  },
  {
    tag: "VietNamCup",
    selected: false
  },
  {
    tag: "women&man",
    selected: false
  },
  {
    tag: "saitama",
    selected: false
  },
  {
    tag: "ChipuLaiHat",
    selected: false
  },
  {
    tag: "NgocTrinhCaSi",
    selected: false
  }
];

export const DATA_POST_HOME: NewsPost[] = [
  new NewsPost("hbafbbfhabfh",
    20.959450,
    105.844156,
    "https://i.vietgiaitri.com/2020/6/3/xinh-dep-lai-co-minh-day-cung-nguc-day-hotgirl-len-hinh-ben-bo-ma-bi-don-cap-dai-gia-19f-4981007.jpg",
    "Tỏ tình",
    TYPE.AFFECTION,
    new Date("2021-06-30T23:46:00"),
    "Người dân Bình Nhưỡng bày tỏ sự lo lắng về sức khỏe của Chủ tịch Triều Tiên Kim Jong-un, trước việc ông Kim gầy đi rõ rệt trong những lần xuất hiện trước công chúng gần đây.\n" +
    "Theo phóng sự được truyền hình Nhà nước Triều Tiên KRT phát sóng vào ngày 25/6, nhiều người dân được nhìn thấy đang theo dõi qua màn hình lớn buổi hòa nhạc mà Chủ tịch Kim cùng các quan chức cấp cao khác tham dự sau cuộc họp Đảng Lao động Triều Tiên.\n" +
    "Một người dân Bình Nhưỡng cho biết \"Thấy Tổng Bí thư Kim Jong-un tiều tụy mà chúng tôi lòng đau như cắt. Nhiều người còn không cầm nổi nước mắt\". Đầu tháng 6, KRT cũng đã công bố hình ảnh ông Kim Jong-un tham dự một buổi họp. Ông Kim gầy đi rõ rệt so với những hình ảnh những tháng trước đó.\n" +
    "Việc Chủ tịch Triều Tiên Kim Jong-un sụt cân đã làm dấy lên nhiều đồn đoán về sức khỏe của ông. Theo chuyên gia khoa học chính trị Vipin Narang của Mỹ, nhà lãnh đạo này có thể đã quyết định giảm cân để tăng cường sức khỏe, củng cố vị thế của mình trong nước.",
    "jimmijimmijimmijimmijimmijimmijimmijimmijimmi",
    4678,
    97,
    567,
    new Date("2021-06-26T13:46:00"),
    "Trần Diệu Nhi",
    "https://i1.sndcdn.com/artworks-000225096653-9ev2hh-t500x500.jpg",

  ),
  new NewsPost("hbafbbfhsfabfh",
    20.959607,
    105.839525,
    "https://2sao.vietnamnetjsc.vn/images/2019/10/21/09/55/hotgirl-08.jpg",
    "Covid 19",
    TYPE.HEALTH,
    new Date("2021-06-29T13:06:00"),
    "Người dân Bình Nhưỡng bày tỏ sự lo lắng về sức khỏe của Chủ tịch Triều Tiên Kim Jong-un, trước việc ông Kim gầy đi rõ rệt trong những lần xuất hiện trước công chúng gần đây.\n" +
    "Theo phóng sự được truyền hình Nhà nước Triều Tiên KRT phát sóng vào ngày 25/6, nhiều người dân được nhìn thấy đang theo dõi qua màn hình lớn buổi hòa nhạc mà Chủ tịch Kim cùng các quan chức cấp cao khác tham dự sau cuộc họp Đảng Lao động Triều Tiên.\n" +
    "Việc Chủ tịch Triều Tiên Kim Jong-un sụt cân đã làm dấy lên nhiều đồn đoán về sức khỏe của ông. Theo chuyên gia khoa học chính trị Vipin Narang của Mỹ, nhà lãnh đạo này có thể đã quyết định giảm cân để tăng cường sức khỏe, củng cố vị thế của mình trong nước.",
    "hem_nau",
    62678,
    934467,
    5444627,
    new Date("2021-06-29T13:06:00"),
    "Lê Quang Tuấn",
    "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-9/201568066_1002891457135913_8758751684983783122_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=825194&_nc_ohc=ssV401EIZnwAX8S1arF&tn=jLBiSTTzO4xZgEau&_nc_ht=scontent-hkg4-2.xx&oh=88725893178d1318c2b55241643e42be&oe=60DD59B1"
  ),
  new NewsPost("hbafbbdbfhabfh",
    20.961483,
    105.852373,
    "https://nld.mediacdn.vn/2020/11/25/anh-hau-2-16062995992951123881961.jpg",
    "Vệ sinh",
    TYPE.CUISINE,
    new Date("2021-07-02T02:02:00"),
    "Người đoán về sức khỏe của ông. Theo chuyên gia khoa học chính trị Vipin Narang của Mỹ, nhà lãnh đạo này có thể đã quyết định giảm cân để tăng cường sức khỏe, củng cố vị thế của mình trong nước.",
    "ron_wass",
    278,
    97,
    67,
    new Date("2021-06-30T23:46:00"),
    "Lê Quang Tuấn",
    "https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-9/199132264_3003112483339426_4133117994374776057_n.png?_nc_cat=1&ccb=1-3&_nc_sid=730e14&_nc_ohc=81PHZsWii3wAX8JXv7L&tn=jLBiSTTzO4xZgEau&_nc_ht=scontent.fhan5-6.fna&oh=58dc7df0f6e1870dcaf79678e9f22d61&oe=60DE81AB"
  ),
  new NewsPost("hbafb35bfhabfh",
    20.962914,
    105.843711,
    "https://vcdn-ngoisao.vnecdn.net/2018/04/28/n1-3214-1524891312.jpg",
    "Trượt môn",
    TYPE.SCHOOL,
    new Date("2021-07-06T23:06:03"),
    "Người dân Bình Nhưỡng bày tỏ sự lo lắng về sức khỏe của Chủ tịch Triều Tiên Kim Jong-un, trước việc ông Kim gầy đi rõ rệt trong những lần xuất hiện trước công chúng gần đây.\n" +
    "Theo phóng sự được truyền hình Nhà nước Triều Tiên KRT phát sóng vào ngày 25/6, nhiều người dân được nhìn thấy đang theo dõi qua màn hình lớn buổi hòa nhạc mà Chủ tịch Kim cùng các quan chức cấp cao khác tham dự sau cuộc họp Đảng Lao động Triều Tiên.\n" +
    "Một người dân Bình Nhưỡng cho biết \"Thấy Tổng Bí thư Kim Jong-un tiều tụy mà chúng tôi lòng đau như cắt. Nhiều người còn không cầm nổi nước mắt\". Đầu tháng 6, KRT cũng đã công bố hình ảnh ông Kim Jong-un tham dự một buổi họp. Ông Kim gầy đi rõ rệt so với những hình ảnh những tháng trước đó.\n" +
    "Việc Chủ tịch Triều Tiên Kim Jong-un sụt cân đã làm dấy lên nhiều đồn đoán về sức khỏe của ông. Theo chuyên gia khoa học chính trị Vipin Narang của Mỹ, nhà lãnh đạo này có thể đã quyết định giảm cân để tăng cường sức khỏe, củng cố vị thế của mình trong nước.",
    "helium",
    7854,
    47,
    2235,
    new Date("2021-06-30T23:46:00"),
    "Nguyễn Văn Bảo",
    "https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-9/204223004_360455965459101_4277662377224102424_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=730e14&_nc_ohc=iRuES8Tru1wAX8k3jyu&_nc_ht=scontent.fhan5-6.fna&oh=cdfd263cdfada543ea594c6040e94a92&oe=60DCAFEA"
  ),
  new NewsPost("hbafb5bfhabfh",
    20.956713,
    105.846910,
    "https://vcdn1-dulich.vnecdn.net/2019/06/12/Va-n-Nam-Trung-Quo-c-VnExpress1-1560304403.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=XnyWZURSWQSF1PRJ-y-XUg",
    "Nhớ",
    TYPE.AFFECTION,
    new Date("2021-07-02T14:36:00"),
    "Người dân Bình Nhưỡng bày tỏ sự lo lắng về sức khỏe của Chủ tịch Triều Tiên Kim Jong-un, trước việc ông Kim gầy đi rõ rệt trong những lần xuất hiện trước công chúng gần đây.\n" +
    "Việc Chủ tịch Triều Tiên Kim Jong-un sụt cân đã làm dấy lên nhiều đồn đoán về sức khỏe của ông. Theo chuyên gia khoa học chính trị Vipin Narang của Mỹ, nhà lãnh đạo này có thể đã quyết định giảm cân để tăng cường sức khỏe, củng cố vị thế của mình trong nước.",
    "thor",
    825,
    5,
    6769,
    new Date("2021-06-30T23:46:00"),
    "Trần Văn Hiếu",
    "https://scontent.fhan5-7.fna.fbcdn.net/v/t1.6435-9/p960x960/201058998_899867833926466_4628414640503367720_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=b9115d&_nc_ohc=WOTroRiM6igAX9JyLbE&_nc_ht=scontent.fhan5-7.fna&tp=6&oh=a3e543b424a6bef9c54551e4f5b6b267&oe=60DD95FC"
  ),
  new NewsPost("hbafbbfhab2fh",
    20.962364,
    105.844507,
    "https://photo-cms-kienthuc.zadn.vn/zoom/800/Uploaded/hongnhat/2018_09_22/1/nb-2_WSZS.jpg",
    "Tai nạn",
    TYPE.TRAFFIC,
    new Date("2021-07-04T12:12:34"),
    "Người dân Bình Nhưỡng bày tỏ sự lo lắng về sức khỏe của Chủ tịch Triều Tiên Kim Jong-un, trước việc ông Kim gầy đi rõ rệt trong những lần xuất hiện trước công chúng gần đây.\n" +
    "Theo phóng sự được truyền hình Nhà nước Triều Tiên KRT phát sóng vào ngày 25/6, nhiều người dân được nhìn thấy đang theo dõi qua màn hình lớn buổi hòa nhạc mà Chủ tịch Kim cùng các quan chức cấp cao khác tham dự sau cuộc họp Đảng Lao động Triều Tiên.\n" +
    "Một người dân Bình Nhưỡng cho biết \"Thấy Tổng Bí thư Kim Jong-un tiều tụy mà chúng tôi lòng đau như cắt. Nhiều người còn không cầm nổi nước mắt\". Đầu tháng 6, KRT cũng đã công bố hình ảnh ông Kim Jong-un tham dự một buổi họp. Ông Kim gầy đi rõ rệt so với những hình ảnh những tháng trước đó.\n" +
    "Việc Chủ tịch Triều Tiên Kim Jong-un sụt cân đã làm dấy lên nhiều đồn đoán về sức khỏe của ông. Theo chuyên gia khoa học chính trị Vipin Narang của Mỹ, nhà lãnh đạo này có thể đã quyết định giảm cân để tăng cường sức khỏe, củng cố vị thế của mình trong nước.",
    "iron_man",
    4534,
    97,
    6546567,
    new Date("2021-06-30T23:46:00"),
    "Nguyễn Thị Mai Anh",
    "https://cdn.huongnghiepaau.com/wp-content/uploads/2020/06/mon-tra-sua-tran-chau.jpg"
  ),
  new NewsPost("hbafbbfhhabfh",
    20.955611,
    105.848648,
    "https://photo-baomoi.zadn.vn/w700_r1/2019_08_02_180_31693139/4cd3a6aee1ee08b051ff.jpg",
    "Kẹt xe",
    TYPE.TRAFFIC,
    new Date("2021-06-28T13:06:00"),
    "Người dân Bình Nhưỡng bàg cường sức khỏe, củng cố vị thế của mình trong nước.",
    "parker",
    8789,
    97,
    686,
    new Date("2021-06-30T23:46:00"),
    "Vũ Thị Thái",
    "http://c.files.bbci.co.uk/9AF9/production/_105937693_gettyimages-621543546.jpg"
  ),
  new NewsPost("hbafbnebfhabfh",
    20.960410,
    105.847886,
    "https://i1.sndcdn.com/artworks-000248908839-wlug27-t500x500.jpg",
    "Ma",
    TYPE.SPIRITUALITY,
    new Date("2021-06-30T08:06:00"),
    "Người dân Bình Nhưỡng bày tỏ sự lo lắng về sức khỏe của Chủ tịch Triều Tiên Kim Jong-un, trước việc ông Kim gầy đi rõ rệt trong những lần xuất hiện trước công chúng gần đây.\n" +
    "Theo phóng sự được truyền hình Nhà nước Triều Tiên KRT phát sóng vào ngày 25/6, nhiều người dân được nhìn thấy đang theo dõi qua màn hình lớn buổi hòa nhạc mà Chủ tịch Kim cùng các quan chức cấp cao khác tham dự sau cuộc họp Đảng Lao động Triều Tiên.\n" +
    "Việc Chủ tịch Triều Tiên Kim Jong-un sụt cân đã làm dấy lên nhiều đồn đoán về sức khỏe của ông. Theo chuyên gia khoa học chính trị Vipin Narang của Mỹ, nhà lãnh đạo này có thể đã quyết định giảm cân để tăng cường sức khỏe, củng cố vị thế của mình trong nước.",
    "tiean",
    4678,
    97,
    567,
    new Date("2021-06-30T23:46:00"),
    "Lâm Tân Như"
  ),
  new NewsPost("hbafbbfha8jbfh",
    20.961763,
    105.846256,
    "https://mondaycareer.com/wp-content/uploads/2020/11/anime-l%C3%A0-g%C3%AC-v%C3%A0-kh%C3%A1i-ni%E1%BB%87m.jpg",
    "Hiến máu",
    TYPE.HEALTH,
    new Date("2021-07-01T17:09:00"),
    "Người dân Bình Nhưỡng bày tỏ sự lo lắng về sức khỏe của Chủ tịch Triều Tiên Kim Jong-un, trước việc ông Kim gầy đi rõ rệt trong những lần xuất hiện trước công chúng gần đây.",
    "helen",
    224,
    245,
    4546,
    new Date("2021-06-30T23:46:00"),
    "Trần Thu Hoài",
    "https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-9/199132264_3003112483339426_4133117994374776057_n.png?_nc_cat=1&ccb=1-3&_nc_sid=730e14&_nc_ohc=81PHZsWii3wAX8JXv7L&tn=jLBiSTTzO4xZgEau&_nc_ht=scontent.fhan5-6.fna&oh=58dc7df0f6e1870dcaf79678e9f22d61&oe=60DE81AB"
  ),
  new NewsPost("hbafbbfhcrtabfh",
    20.964578,
    105.848101,
    "https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg",
    "Thi THPT",
    TYPE.SCHOOL,
    new Date("2021-06-28T19:36:00"),
    "Người dân Bình Nhưỡng bày tỏ sự lo lắng về sức khỏe của Chủ tịch Triều Tiên Kim Jong-un, trước việc ông Kim gầy đi rõ rệt trong những lần xuất hiện trước công chúng gần đây.\n" +
    "Theo phóng sự được truyền hình Nhà nước Triều Tiên KRT phát sóng vào ngày 25/6, nhiều người dân được nhìn thấy đang theo dõi qua màn hình lớn buổi hòa nhạc mà Chủ tịch Kim cùng các quan chức cấp cao khác tham dự sau cuộc họp Đảng Lao động Triều Tiên.\n" +
    "Một người dân Bình Nhưỡng cho biết \"Thấy Tổng Bí thư Kim Jong-un tiều tụy mà chúng tôi lòng đau như cắt. Nhiều người còn không cầm nổi nước mắt\". Đầu tháng 6, KRT cũng đã công bố hình ảnh ông Kim Jong-un tham dự một buổi họp. Ông Kim gầy đi rõ rệt so với những hình ảnh những tháng trước đó.\n" +
    "Một người dân Bình Nhưỡng cho biết \"Thấy Tổng Bí thư Kim Jong-un tiều tụy mà chúng tôi lòng đau như cắt. Nhiều người còn không cầm nổi nước mắt\". Đầu tháng 6, KRT cũng đã công bố hình ảnh ông Kim Jong-un tham dự một buổi họp. Ông Kim gầy đi rõ rệt so với những hình ảnh những tháng trước đó.\n" +
    "Việc Chủ tịch Triều Tiên Kim Jong-un sụt cân đã làm dấy lên nhiều đồn đoán về sức khỏe của ông. Theo chuyên gia khoa học chính trị Vipin Narang của Mỹ, nhà lãnh đạo này có thể đã quyết định giảm cân để tăng cường sức khỏe, củng cố vị thế của mình trong nước.",
    "porter",
    8797,
    97,
    567,
    new Date("2021-06-30T23:46:00"),
    "Đỗ Đức Lương"
  )

];
