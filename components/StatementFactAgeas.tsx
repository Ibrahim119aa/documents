"use client"

import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer"

// You can register custom fonts if needed, for example:
// Font.register({ family: 'Roboto', src: '/fonts/Roboto-Regular.ttf' });

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: '#000',

    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Helvetica", // Default font, widely supported
    fontSize: 8,
    paddingTop: '5',
    lineHeight: 1.2,
    position: "relative", // For absolute positioning of elements if needed
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5
  },
  addressBlock: {
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 8,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

  },
  ageasLogo: {
    width: 80,
    height: 80,
    paddingLeft: 10,
    paddingTop: 5
  },
  certification: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    textAlign: "justify",
    marginBottom: 20,
  },
  companyDetails: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    textAlign: "left",
    marginBottom: 20,
  },
  companyName: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 5,
  },
  ceo: {
    marginTop: 10,
  },
  instruction: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginBottom: 30,
    textAlign: "left",
  },
  dottedLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "dotted",
    marginBottom: 20,
  },
  certificateTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  mainCertificateSection: {
    borderTop: 1,
    borderLeft: 1,
    borderRight: 1,
    borderBottom:1,
    paddingBottom:'10',


    borderColor: "#000",
  },
  mainCertificateSection1: {

    borderLeft: 1,
    borderBottom: 1,
    marginBottom: '5',
    paddingBottom: '5',
    borderRight: 1,
    borderColor: "#000",
  },
  listItem: {
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  listItemNumber: {
    width: 20,
    marginRight: 5,
  },
  listItemContent: {
    flex: 1,
  },
  subListItem: {
    marginLeft: 20,
    marginTop: 5,
  },
  bold: {
    fontWeight: "bold",
  },
  noteWarning: {
    marginTop: 10,
    marginBottom: 5,
  },
  footer: {
    marginTop: "auto", // Pushes footer to the bottom of the page
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
  },
  footerLeft: {
    textAlign: "left",
    fontSize: 8,
    flex: 1,
  },
  footerRight: {
    textAlign: "right",
    fontSize: 8,
    width: 80, // Fixed width for alignment
  },
  claimsHotline: {
    marginTop: 10,
    fontSize: 10,
    fontWeight: "bold",
  },
  signatureSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 10,
    marginBottom: 10,
  },
  signatureImage: {
    width: 150,
    height: 50,
  },
  signatureText: {
    textAlign: "right",
    fontSize: 9,
  },
  // New styles for Schedule page
  scheduleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 10,
  },
  scheduleTable: {

    borderColor: "#000",

  },
  scheduleRow: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  scheduleRow4: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  scheduleRow2: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  scheduleRow3: {
    flexDirection: "row",
    alignItems: "stretch",
    marginLeft: 5
  },
  scheduleEmptyRow:
  {
    height: '25',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingLeft: 5,
    paddingTop: 5,
    // padding:10,
    backgroundColor: '#f0f0f0',
    width: '100%'
  },
  scheduleEmptySmallestRow:
  {
    height: '3',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,

    borderColor: '#000',

    paddingLeft: 5,
    paddingTop: 5,
    // padding:10,

    width: '100%'
  },
  scheduleEmptyRowWthCenterContent:
  {
    height: '25',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingLeft: 5,
    paddingTop: 5,
    // padding:10,
    backgroundColor: '#f0f0f0',
    width: '100%',
    textAlign: 'center'
  },
  scheduleEmptyRowSmall:
  {
    height: '5',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingLeft: 5,
    paddingTop: 5,
    // padding:10,
    backgroundColor: '#f0f0f0',
    width: '100%'
  },
  scheduleCell: {
    paddingLeft: '10',
    paddingTop: '10',
    flex: 1,
    justifyContent: "center",
  },
  scheduleCell2: {
    padding: 5,
    width: '20%',
    justifyContent: "center",
    textAlign: 'center'
  },
  scheduleCell1: {
    padding: 5,
    borderRightWidth: 1,
    borderRightColor: "#000",
    justifyContent: 'flex-start'
  },
  customWidthCell:
  {
    width: '15%',
    marginRight: 5,
  },
  scheduleCellWithoutBorder: {
    padding: 5,
    flex: 1,
    justifyContent: "center",
  },
  scheduleCellWithoutBorder2: {
    padding: 5,
    backgroundColor: 'red'
  },
  scheduleCellLast: {
    borderRightWidth: 0,
  },
  scheduleHeaderCell: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
  scheduleCellSmall: {
    width: '30%',
    paddingLeft: '10',
    paddingTop: '10'

  },
  scheduleCellLarge: {
    flex: 2,
  },
  scheduleCellMedium: {
    flex: 1.5,
  },
  scheduleCellAuto: {
    flex: "auto",
    width: "auto",
  },
  schedulefirstcolumn:
  {
    width: '16.5%',
  },
  boxedText: {


    borderColor: "#000",
    padding: 5,
    marginBottom: 10,
  },
  boxedText1: {

    borderBottomWidth: 1,
    borderColor: "#000",
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    textAlign: 'center'
  },
  endorsementSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  endorsementTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  endorsementListItem: {
    marginBottom: 5,
  },
  endorsementSubListItem: {
    marginLeft: 10,
    marginBottom: 3,
  },
  companyInfoBlock: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 9,
  },

  schedule:
  {
    alignItems: 'flex-end',

  },
  insuranceadvisor:
  {
    marginRight: 100
  },
  addressissuing:
  {
    marginRight: 140
  },
  addressissuing1:
  {
    marginRight: 92
  },
  addressissuing2:
  {
    marginRight: 117
  },
  schedulesubheading:
  {
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#000'
  },
  customWidth:
  {
    width: '16.8%',
    borderRightWidth: 1,
    borderColor: '#000'
  },
  marginTop:
  {
    marginTop: 2
  },
  marginTop1:
  {
    marginTop: 10
  },
  underlinetext:
  {
    textDecoration: 'underline'

  },
  lastHeading:
  {
    textAlign: 'center',
    marginTop: '2',

  },
  secondPageFirstContent:
  {
    marginTop: '25',
    fontSize: '10',
    paddingLeft: '5',
    paddingRight: '5'
  },
  secondpagesubcontent:
  {
    marginTop: '15',
    paddingLeft: '5',
    paddingRight: '5',
    fontSize: '10',
  },
  thirdpagesubcontent:
  {
    marginTop: '15',
    paddingLeft: '15',
    paddingRight: '5',
    fontSize: '10',
  },
  listStyle:
  {
    marginLeft: '15',
    paddingTop: '1'
  },
  logo:
  {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  heading:
  {
    fontWeight: 'bold',
    fontSize: '18',
    marginBottom: '20'
  },
  flexBox:
  {
    display: 'flex',
    flexDirection: 'row',
    gap: '20',
    width: '48%',
    paddingLeft: '8',

  },
  flexBox1:
  {
    display: 'flex',
    flexDirection: 'row',
    gap: '20',
    width: '45%',

  },
  leftSpace:
  {
    paddingLeft: '10'
  },
  underLine:
  {

    marginLeft: '10',
    marginRight: '10',
    marginTop: '10',
    borderWidth: '1',
    borderColor: 'black',
    height: '2'
  },
  importantNote:
  {

    marginLeft: '10',
    marginRight: '10',
    marginTop: '15',
    backgroundColor: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:'9',
    color:'white',
    paddingTop:'5',
    fontWeight:'bold',
    paddingBottom:'5'

  }

})

const StatementFactAgeas = () => (
  <Document>
    {/* Page 1: Schedule */}
    <Page size="A4" style={styles.page}>
      {/* */}
      <View style={styles.logo}>
        <Image src="/logo.png" style={styles.ageasLogo} width={90} height={40} alt="Ageas Logo" />

      </View>
      <View style={styles.heading}>
        <Text >STATEMENT OF FACT - Short Term Insurance</Text>
      </View>

      <View style={styles.mainCertificateSection}>

        <View style={styles.scheduleTable}>
          <View style={styles.scheduleRow}>
            <View style={[styles.scheduleCellSmall]}>
              <Text style={styles.bold}>Your Agent</Text>
              <Text>Agent</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellLarge]}>
              <Text>Tempcover Limited</Text>
            </View>


          </View>
          <View style={[styles.marginTop, styles.scheduleRow]}>
            <View style={[styles.scheduleCellSmall]}>
              <Text style={styles.bold}>Your Details - Name Address</Text>
              <Text style={styles.marginTop}>Surname</Text>
              <Text style={styles.marginTop}>Forename(s)</Text>
              <Text style={styles.marginTop}>Title</Text>
              <Text style={styles.marginTop}>Telephone Number</Text>
              <Text style={styles.marginTop}>Email Address</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text style={styles.bold}>Miah</Text>
              <Text style={styles.marginTop}>Uzzal</Text>
              <Text style={styles.marginTop}>Mr</Text>
              <Text style={styles.marginTop}>14 Lindsey Road, Dagenham, Greater London, RM8 2RP</Text>
              <Text style={styles.marginTop}>07352101466</Text>
              <Text style={styles.marginTop}>testersgbp@gmail.com</Text>
            </View>

          </View>
          <View style={[styles.marginTop, styles.scheduleRow]}>
            <View style={[styles.scheduleCellSmall]}>
              <Text style={styles.bold}>Policy Cover:</Text>
              <Text style={styles.marginTop}>Effective Date</Text>
              <Text style={styles.marginTop}>Expiry Date</Text>
              <Text style={styles.marginTop}>Policy Cover</Text>
              <Text style={styles.marginTop}>Number of Drivers (including you)</Text>
              <Text style={styles.marginTop}>Class of Use</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text></Text>

              <Text style={styles.bold}>15:35 09 June 2025</Text>
              <Text style={styles.marginTop}> 16:35 09 June 2025</Text>
              <Text style={styles.marginTop}> FULLY COMPREHENSIVE</Text>
              <Text style={styles.marginTop}>1</Text>
              <Text style={styles.marginTop}>User for Social domestic and pleasure purposes, and business use by the Policyholder in connection with their business or profession EXCLUDING use for hire or reward ,racing pacemaking, speed testing, commerical travelling or use for any purpose in connection with the motor trade.</Text>
            </View>

          </View>

          <View>
            <Text style={[styles.bold, styles.leftSpace]}>Driver Details (including You)</Text>

          </View>

          <View style={[styles.scheduleRow]}>

            <View style={[styles.flexBox]}>
              <View sty>
                <Text > Full Name</Text>
                <Text style={styles.marginTop}> Sex</Text>
                <Text style={styles.marginTop}> Date of birth</Text>
                <Text style={styles.marginTop}> Licence Type</Text>
                <Text style={styles.marginTop}> Occupation</Text>

              </View>
              <View>
                <Text style={styles.marginTop}>Uzzal</Text>
                <Text style={styles.marginTop}> Male</Text>
                <Text style={styles.marginTop}> 02 November 1978</Text>
                <Text style={styles.marginTop}> Full UK licence</Text>
                <Text style={styles.marginTop}> Not required</Text>

              </View>
            </View>
            <View style={[styles.flexBox1]}>
              <View>
                <Text > Full Name</Text>
                <Text style={styles.marginTop}> Sex</Text>
                <Text style={styles.marginTop}> Date of birth</Text>
                <Text style={styles.marginTop}> Licence Type</Text>
                <Text style={styles.marginTop}> Occupation</Text>

              </View>
              <View>
                <Text style={styles.marginTop}>--</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>

              </View>
            </View>

          </View>
          <View style={[styles.marginTop, styles.scheduleRow]}>
            <View style={[styles.scheduleCellSmall]}>
              <Text style={styles.bold}>Vehicle Details:</Text>
              <Text style={styles.marginTop}>Make</Text>
              <Text style={styles.marginTop}>Model</Text>
              <Text style={styles.marginTop}>Registration number</Text>
              <Text style={styles.marginTop}>Vehicle Value</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text></Text>

              <Text style={styles.bold}> NISSAN</Text>
              <Text style={styles.marginTop}>MICRA TEMPEST</Text>
              <Text style={styles.marginTop}>LF52BVB</Text>
              <Text style={styles.marginTop}>£1,500 to £5,000</Text>
            </View>

          </View>


          <View style={styles.marginTop1}>
            <Text style={[styles.bold, styles.leftSpace]}>Accident / Claim Details</Text>

          </View>

          <View style={[styles.scheduleRow]}>

            <View style={[styles.flexBox]}>
              <View >
                <Text > Driver Name</Text>
                <Text style={[styles.marginTop, { marginLeft: 2 }]}>Date of Claims</Text>
                <Text style={[styles.marginTop, { marginLeft: 2 }]}>Costs</Text>
                <Text style={styles.marginTop}> Fault or Non-Fault</Text>

              </View>
              <View >
                <Text style={styles.marginTop}>Uzzal Miah</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>

              </View>
            </View>
            <View style={[styles.flexBox1]}>
              <View >
                <Text > Driver Name</Text>
                <Text style={[styles.marginTop, { marginLeft: 2 }]}>Date of Claims</Text>
                <Text style={[styles.marginTop, { marginLeft: 2 }]}>Costs</Text>
                <Text style={styles.marginTop}> Fault or Non-Fault</Text>

              </View>
              <View>
                <Text style={styles.marginTop}>--</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>

              </View>
            </View>

          </View>
          <View style={styles.underLine}></View>
          <View style={[styles.scheduleRow, styles.marginTop1]}>

            <View style={[styles.flexBox]}>
              <View >
                <Text > Driver Name</Text>
                <Text style={[styles.marginTop, { marginLeft: 2 }]}>Date of Claims</Text>
                <Text style={[styles.marginTop, { marginLeft: 2 }]}>Costs</Text>
                <Text style={styles.marginTop}> Fault or Non-Fault</Text>

              </View>
              <View >
                <Text style={styles.marginTop}>Uzzal Miah</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>

              </View>
            </View>
            <View style={[styles.flexBox1]}>
              <View >
                <Text > Driver Name</Text>
                <Text style={[styles.marginTop, { marginLeft: 2 }]}>Date of Claims</Text>
                <Text style={[styles.marginTop, { marginLeft: 2 }]}>Costs</Text>
                <Text style={styles.marginTop}> Fault or Non-Fault</Text>

              </View>
              <View>
                <Text style={styles.marginTop}>--</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>

              </View>
            </View>

          </View>
          <View style={styles.importantNote}>
            <Text>
              IMPORTANT - You also must read the Ageas Insurance Proposer Declaration & important Notes on Pages 2 & 3
            </Text>
          </View>
        </View>



      </View>

    </Page>


  </Document >
)

export default StatementFactAgeas;
