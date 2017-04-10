# this will take the playlists and output them all into a dated folder with the playlist id as the filename.
# the folder will be ignored by gitignore, so be aware it should be copied over to it's final destination.

# WIP need to not add manually an access token:
# https://developer.spotify.com/web-api/console/get-playlist/#complete

accesstoken="BQDbn22qKFUElNKhLBoLZuvDRhjM7-30Bx0vYhBdf61pU7IJBrOQGQnoKbTHATMvUNURSS7MDhCL_IMCYxJYtrmbr4jwSkXlKM88sJBDtrin5kNlQOSDpVu0sFFTMltHkInfCDftOAX2ODfQ0EQJX5LMofNdVk3QgJ-POqYNlsA0fucRzXJtqXm2_xNBn6fXgoeigssNj3QTdaqlZE9tmMNwSNXyKg3PiwCFir9KJtiBff9gCDxpSBkn2i9G1fM1zfi7huRbdOHapS1HQI4b82YuTV6knH1GWgEOuDvVW78"
folder=`date +"%b-%d-t%H_%M"`

playlists[0]="0CWzBAfI42kuSUiKyWB52D";
playlists[1]="17gRYmBjoHoijT7IFfiqi9";
playlists[2]="0jrOUDeQ9hm4Mz5zZUXOKF";
playlists[3]="2BCNHPQHZxJX4SttFSUVi5";
playlists[4]="0e4wWMuythbjUZSasGVK2i";
playlists[5]="3lJlLgBMFTTWWG8xlq79Xt";
playlists[6]="1R73zmi0s0ulDcp4NshD8d";
playlists[7]="0JVpX952uuVd65QgmULHzP";


	
echo $accesstoken;
echo $folder;
mkdir $folder;

for i in ${playlists[*]} 
do 
echo $i
# echo "https://api.spotify.com/v1/users/starbucks/playlists/$i"
curl -X GET "https://api.spotify.com/v1/users/starbucks/playlists/$i" -H "Accept: application/json" -H "Authorization: Bearer $accesstoken" -o "$folder/$i.json";
done;


echo 'done';