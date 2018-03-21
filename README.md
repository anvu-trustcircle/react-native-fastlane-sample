# FastlaneSample

sample react-native project for implement fastlane and beta crashlytics

### react-native

v 0.53.3

### android

package-name: com.trci.sample.fastlane

MYAPP_RELEASE_STORE_FILE=YOUR-RELEASE-KEY.keystore

MYAPP_RELEASE_KEY_ALIAS=YOUR-KEY-ALIAS

MYAPP_RELEASE_STORE_PASSWORD=FastlaneSample

MYAPP_RELEASE_KEY_PASSWORD=FastlaneSample

### ios

bundle id:

app_identifier "com.trustcircle.tknv3-dev"

apple_id "an.vu@trustcircle.com"

team_id "LT5B79L8T7"

cert github repo: https://github.com/anvu-trustcircle/react-native-cert

type: enterprise

### crashlytics

api_token: 170c87df1b26132ef28510f40376dd75cb61f489

build_secrect: 993c5ab5dbbd48e1f585a02fe66762340c4f8860b2136e177d9a9c6c341de21c

tester_group: fastlane-tester

### release

v1.0: add fastlane, crashlytics for [documents](https://github.com/trustcircleglobal/documents/tree/master/technical/client/fastlane).

v1.1.14: add circle ci for android

v1.2.8: add circle ci for web

v1.3.17: add circle ci for ios

v1.4.12: release circle ci for docs example

v1.4.13: add counter example, remote-redux-devtools for [documents](https://github.com/trustcircleglobal/documents/tree/master/technical/client/redux-devtools).
