const users= [{"id":1,"first_name":"Berti","last_name":"Skune","email":"bskune0@stumbleupon.com","gender":"Agender","ip_address":"17.234.221.171"},
{"id":2,"first_name":"Israel","last_name":"Tirrell","email":"itirrell1@princeton.edu","gender":"Male","ip_address":"167.5.173.224"},
{"id":3,"first_name":"Caren","last_name":"Manderson","email":"cmanderson2@disqus.com","gender":"Female","ip_address":"99.57.50.92"},
{"id":4,"first_name":"Valry","last_name":"Loud","email":"vloud3@ehow.com","gender":"Genderqueer","ip_address":"19.85.234.74"},
{"id":5,"first_name":"Nerta","last_name":"Klee","email":"nklee4@comcast.net","gender":"Female","ip_address":"121.133.96.213"},
{"id":6,"first_name":"Harry","last_name":"Raspison","email":"hraspison5@fc2.com","gender":"Male","ip_address":"254.234.228.232"},
{"id":7,"first_name":"Maryjo","last_name":"Frape","email":"mfrape6@histats.com","gender":"Female","ip_address":"109.252.23.192"},
{"id":8,"first_name":"Katey","last_name":"Avrahamoff","email":"kavrahamoff7@wp.com","gender":"Female","ip_address":"227.146.153.127"},
{"id":9,"first_name":"Wallie","last_name":"McGhee","email":"wmcghee8@google.de","gender":"Female","ip_address":"135.93.1.35"},
{"id":10,"first_name":"Cyb","last_name":"Lydster","email":"clydster9@devhub.com","gender":"Genderqueer","ip_address":"123.156.135.45"},
{"id":11,"first_name":"Candis","last_name":"Sheehy","email":"csheehya@google.it","gender":"Female","ip_address":"211.122.74.216"},
{"id":12,"first_name":"Annora","last_name":"Vickerman","email":"avickermanb@comcast.net","gender":"Female","ip_address":"54.168.227.184"},
{"id":13,"first_name":"Stevie","last_name":"McHale","email":"smchalec@zimbio.com","gender":"Male","ip_address":"242.152.27.111"},
{"id":14,"first_name":"Lothario","last_name":"Landeaux","email":"llandeauxd@oakley.com","gender":"Male","ip_address":"25.123.241.87"},
{"id":15,"first_name":"Patricia","last_name":"Lightbourne","email":"plightbournee@sourceforge.net","gender":"Genderqueer","ip_address":"15.195.64.231"},
{"id":16,"first_name":"Farley","last_name":"Normanvell","email":"fnormanvellf@cdbaby.com","gender":"Male","ip_address":"172.90.224.134"},
{"id":17,"first_name":"Reidar","last_name":"Bibey","email":"rbibeyg@msu.edu","gender":"Polygender","ip_address":"51.162.20.133"},
{"id":18,"first_name":"Aeriel","last_name":"Pafford","email":"apaffordh@privacy.gov.au","gender":"Female","ip_address":"219.76.204.46"},
{"id":19,"first_name":"Roselia","last_name":"Cartwright","email":"rcartwrighti@sitemeter.com","gender":"Female","ip_address":"62.45.222.90"},
{"id":20,"first_name":"Rodney","last_name":"Vickars","email":"rvickarsj@redcross.org","gender":"Male","ip_address":"192.123.101.148"},
{"id":21,"first_name":"Shurlock","last_name":"Lerwill","email":"slerwillk@example.com","gender":"Male","ip_address":"25.34.226.35"},
{"id":22,"first_name":"Raffaello","last_name":"Storres","email":"rstorresl@about.me","gender":"Male","ip_address":"177.255.135.184"},
{"id":23,"first_name":"Denise","last_name":"MacKintosh","email":"dmackintoshm@google.com.hk","gender":"Female","ip_address":"197.29.79.25"},
{"id":24,"first_name":"Rubia","last_name":"Godspeede","email":"rgodspeeden@usgs.gov","gender":"Female","ip_address":"105.105.140.21"},
{"id":25,"first_name":"Amery","last_name":"Puvia","email":"apuviao@123-reg.co.uk","gender":"Male","ip_address":"36.224.77.7"},
{"id":26,"first_name":"Berni","last_name":"Willerson","email":"bwillersonp@archive.org","gender":"Female","ip_address":"125.230.5.128"},
{"id":27,"first_name":"Errol","last_name":"Choke","email":"echokeq@tripadvisor.com","gender":"Male","ip_address":"47.62.31.158"},
{"id":28,"first_name":"Martainn","last_name":"Holde","email":"mholder@va.gov","gender":"Male","ip_address":"237.181.53.104"},
{"id":29,"first_name":"Viv","last_name":"O'Doherty","email":"vodohertys@nasa.gov","gender":"Female","ip_address":"13.120.234.169"},
{"id":30,"first_name":"Elle","last_name":"Oxe","email":"eoxet@odnoklassniki.ru","gender":"Non-binary","ip_address":"34.92.165.120"},
{"id":31,"first_name":"Jenilee","last_name":"Oak","email":"joaku@cnbc.com","gender":"Female","ip_address":"149.91.59.171"},
{"id":32,"first_name":"Wallache","last_name":"Tucknutt","email":"wtucknuttv@nba.com","gender":"Male","ip_address":"73.76.17.212"},
{"id":33,"first_name":"Sonia","last_name":"Bremond","email":"sbremondw@dedecms.com","gender":"Female","ip_address":"69.168.181.245"},
{"id":34,"first_name":"Mortie","last_name":"Trippick","email":"mtrippickx@time.com","gender":"Male","ip_address":"159.110.222.100"},
{"id":35,"first_name":"Rowe","last_name":"Reddington","email":"rreddingtony@gizmodo.com","gender":"Female","ip_address":"229.121.168.246"},
{"id":36,"first_name":"Berke","last_name":"Congdon","email":"bcongdonz@census.gov","gender":"Male","ip_address":"153.202.95.128"},
{"id":37,"first_name":"Gustavus","last_name":"Arrigucci","email":"garrigucci10@mail.ru","gender":"Male","ip_address":"55.124.115.223"},
{"id":38,"first_name":"Cornelia","last_name":"Millea","email":"cmillea11@bing.com","gender":"Female","ip_address":"154.22.20.217"},
{"id":39,"first_name":"Paten","last_name":"Dabernott","email":"pdabernott12@aol.com","gender":"Male","ip_address":"72.28.119.241"},
{"id":40,"first_name":"Gerard","last_name":"Dring","email":"gdring13@booking.com","gender":"Male","ip_address":"10.133.201.120"},
{"id":41,"first_name":"Vannie","last_name":"Cleaton","email":"vcleaton14@house.gov","gender":"Female","ip_address":"117.1.71.241"},
{"id":42,"first_name":"Redd","last_name":"Mangeney","email":"rmangeney15@amazonaws.com","gender":"Male","ip_address":"223.49.138.10"},
{"id":43,"first_name":"Palm","last_name":"Bimrose","email":"pbimrose16@independent.co.uk","gender":"Agender","ip_address":"97.166.118.179"},
{"id":44,"first_name":"Ashlee","last_name":"Jimenez","email":"ajimenez17@china.com.cn","gender":"Female","ip_address":"204.96.113.222"},
{"id":45,"first_name":"Karlens","last_name":"D'Abbot-Doyle","email":"kdabbotdoyle18@thetimes.co.uk","gender":"Male","ip_address":"150.66.79.60"},
{"id":46,"first_name":"Giavani","last_name":"Lamba","email":"glamba19@weebly.com","gender":"Male","ip_address":"180.159.222.78"},
{"id":47,"first_name":"Rockey","last_name":"Schruyers","email":"rschruyers1a@narod.ru","gender":"Male","ip_address":"174.33.187.157"},
{"id":48,"first_name":"Orton","last_name":"Blanden","email":"oblanden1b@cnet.com","gender":"Male","ip_address":"254.119.212.195"},
{"id":49,"first_name":"Ebenezer","last_name":"Imlacke","email":"eimlacke1c@howstuffworks.com","gender":"Male","ip_address":"221.141.44.131"},
{"id":50,"first_name":"Adria","last_name":"Ubanks","email":"aubanks1d@meetup.com","gender":"Female","ip_address":"40.114.197.110"},
]


function getUsers(page,limit){
let array=[];
for (let i=(page-1)*limit;i<(page*limit)&&users[i];i++){
    array.push(users[i]);
    }
    return array;

}

function getLength(){
    return users.length
    }

export {getUsers,getLength};
