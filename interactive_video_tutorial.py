import csv
import dominate
from dominate.tags import *


csvDataInArray = []
with open('csv/csv_videoinformation.csv', newline='') as csvfile:
    tablereader = csv.reader(csvfile)
    next(tablereader)
    for row in tablereader:        
        csvDataInArray.append(row)


doc = dominate.document(title='Video Tutorial')
with doc.head:
    link(rel='stylesheet', href='css/style.css')
    script(type='text/javascript', src='./js/cryptojs_v3.1.2.js')
    script(type='text/javascript', src='./js/xapiwrapper.js')
    script(type='text/javascript', src='./js/xapi_video_processer.js')
    script(type='text/javascript', src='./js/xapi_user_details.js')
with doc:
    with div(id='video-container').add(video('Your browser does not support HTML5 video.', id='mediaPlayer', controls='true')):
        source(src='videos/input_video.mp4', type='video/mp4')
    with div(id='form_container',cls='form-container').add(form(id='test_form', onsubmit='return submitTest()')):
        div(id='test_container')
        input_(id='submit_button', type='submit')
    script('const csvDataInArray = ', '{}'.format(csvDataInArray))    
    script(type='text/javascript', src='./js/tests_organizer.js')
    script(type='text/javascript', src='./js/xapi_tests_processer.js')
    script(type='text/javascript', src='./js/video_organizer.js')


with open('index.html', 'w') as fp:
    print(doc, file=fp)  