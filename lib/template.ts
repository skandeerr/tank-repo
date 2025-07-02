import type { ReportData } from "./store"

export function generateReportHTML(data: ReportData): string {
  const currentDate = new Date().toLocaleDateString("en-US")
  

  return `
    <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <title>PDF Export</title>
      <link rel="stylesheet" >
          <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

  </head>
  <body style="background: #fff; margin: 0; padding: 0;">
  <div class="page" id="page-1" style="position: relative;">
  <img src="/images/image_1_1.jpeg" style="left:374.88px; top:780.25px; width:158.16px; height:46.80px; position:absolute;" />

  <span style="left:56.76px; top:109.37px; font-size:21.96px; font-family:'Arial,Bold'; position:absolute;">COMPLIANCE REPORT</span>
  <span style="left:56.76px; top:134.57px; font-size:21.96px; font-family:'Arial'; position:absolute;">API 653 OFF-STREAM INSPECTION</span>
  <span style="left:56.76px; top:159.77px; font-size:21.96px; font-family:'Arial'; position:absolute;">S.E.P.T.</span>
  <span style="left:56.76px; top:185.09px; font-size:21.96px; font-family:'Arial'; position:absolute;">${data.general.tankIdentification}</span>

  <!-- ✅ Tableau augmenté -->
  <table style="
    position: absolute;
    left: 59.28px;
    top: 522.06px;
    font-family: Arial;
    font-size: 12.44px;  /* 6.96 × 1.5 */
    border-collapse: collapse;
    width: 375px; /* env. 250 × 1.5 */
  ">
    <tr>
      <td style="font-weight: bold; padding: 4px;">Tank No</td>
      <td style="padding: 4px;">${data.general.tankIdentification}</td>
    </tr>
    <tr>
      <td colspan="2"><hr style="border: none; border-top: 0.75px solid black; margin: 0;"></td>
    </tr>
    <tr>
      <td style="font-weight: bold; padding: 4px;">Location</td>
      <td style="padding: 4px;">Skhira, Tunisia</td>
    </tr>
    <tr>
      <td colspan="2"><hr style="border: none; border-top: 0.75px solid black; margin: 0;"></td>
    </tr>
    <tr>
      <td style="font-weight: bold; padding: 4px;">Project Number</td>
      <td style="padding: 4px;">5-2160-10677</td>
    </tr>
    <tr>
      <td colspan="2"><hr style="border: none; border-top: 0.75px solid black; margin: 0;"></td>
    </tr>
    <tr>
      <td style="font-weight: bold; padding: 4px;">Report Number</td>
      <td style="padding: 4px;">CR-2160-SKH-105-20160927-0</td>
    </tr>
    <tr>
      <td colspan="2"><hr style="border: none; border-top: 0.75px solid black; margin: 0;"></td>
    </tr>
    <tr>
      <td style="font-weight: bold; padding: 4px;">Date of Inspection</td>
      <td style="padding: 4px;">September, 2016</td>
    </tr>
    <tr>
      <td colspan="2"><hr style="border: none; border-top: 0.75px solid black; margin: 0;"></td>
    </tr>
    <tr>
      <td style="font-weight: bold; padding: 4px;">Inspectors</td>
      <td style="padding: 4px;">
        I. Peddemors<br>
        API 653 Cert no. 44333
      </td>
    </tr>
  </table>

  <img src="/images/image_1_7.jpeg" style="left:57.84px; top:250.21px; width:316.56px; height:237.48px; position:absolute;" />
</div>


  <div class="page" id="page-2">
<div class="container">
  <div class="line line1">
    <span class="label">Client:</span>
    <span class="value">Vivo Energy / S.E.P.T.</span>
  </div>
  <div class="line line2">
    <span class="label">Location:</span>
    <span class="value">Skhira, Tunisia</span>
  </div>
  <div class="line line3">
    <span class="label">Tank Number:</span>
    <span class="value">${data.general.tankIdentification}</span>
  </div>
  <div class="line line4">
    <span class="label">Revision Date:</span>
    <span class="value">September 27, 2016</span>
  </div>
  <div class="line line5">
    <span class="label">ROSEN Project No.:</span>
    <span class="value">5-2160-10677</span>
  </div>
  <div class="line line6">
    <span class="label">Revision No.:</span>
    <span class="value">0</span>
  </div>
</div>  <span style="left:160.83096313476562px; top:68.70120239257812px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> 0</span>
  <span style="left:59.52000045776367px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">This document is classified as confidential</span>
  <span style="left:466.2645263671875px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">ROSEN · page 2 of 21</span>
  <img src="/images/image_2_8.jpeg" style="left:443.2799987792969px; top:426.1300048828125px; width:92.16000366210938px; height:42.0px; position:absolute;" />
  <img src="/images/image_2_9.jpeg" style="left:459.8399963378906px; top:471.8500061035156px; width:86.16000366210938px; height:37.55999755859375px; position:absolute;" />
  <img src="/images/image_2_10.jpeg" style="left:452.760009765625px; top:501.1300048828125px; width:113.6400146484375px; height:55.44000244140625px; position:absolute;" />
  <img src="/images/image_2_11.jpeg" style="left:313.20001220703125px; top:515.7699584960938px; width:121.20001220703125px; height:64.32000732421875px; position:absolute;" />
  <span style="left:116.27999877929688px; top:211.85499572753906px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">Rosen Europe B.V.</span>
  <span style="left:116.27999877929688px; top:227.1750030517578px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">Office Oldenzaal</span>
  <span style="left:116.27999877929688px; top:239.61500549316406px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">NDT Diagnostics Department</span>
  <span style="left:116.27999877929688px; top:257.49501037597656px; font-size:12.0px; font-family:'Arial'; position:absolute;">Zutphenstraat 15</span>
  <span style="left:116.27999877929688px; top:273.8150177001953px; font-size:12.0px; font-family:'Arial'; position:absolute;">7575 EJ Oldenzaal</span>
  <span style="left:116.27999877929688px; top:285.1350402832031px; font-size:12.0px; font-family:'Arial'; position:absolute;">The Netherlands</span>
  <span style="left:116.27999877929688px; top:299.8949890136719px; font-size:12.0px; font-family:'Arial'; position:absolute;">Phone +31 (0) 541671 000</span>
  <span style="left:116.27999877929688px; top:313.2149963378906px; font-size:12.0px; font-family:'Arial'; position:absolute;">Fax +31 (0) 541671 130</span>
  <span style="left:116.27999877929688px; top:328.5350036621094px; font-size:12.0px; font-family:'Arial'; position:absolute;">bmaes@rosen-group.com</span>
  <span style="left:116.27999877929688px; top:343.2950134277344px; font-size:12.0px; font-family:'Arial'; position:absolute;">www.rosen-group.com</span>
<table style="
  position: absolute;
  left: 116.28px;
  top: 440.82px;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  font-size: 10.44px; /* 6.96 * 1.5 */
  width: 422px; /* largeur approximative */
">
  <tbody>
    <tr>
      <td style="font-weight: bold; padding: 4px 8px; width: 160px;">Prepared by</td>
      <td style="padding: 4px 8px;">S.W. ter Stal</td>
    </tr>
    <tr>
      <td></td>
      <td style="padding: 0 8px 8px 8px;">Mechanical / Structural Engineer</td>
    </tr>
    <tr>
      <td colspan="2" style="border-bottom: 1px solid black; height: 1px;"></td>
    </tr>
    <tr>
      <td style="font-weight: bold; padding: 4px 8px;">Checked by</td>
      <td style="padding: 4px 8px;">D. Dunnebier</td>
    </tr>
    <tr>
      <td></td>
      <td style="padding: 0 8px 8px 8px;">Integrity Engineer</td>
    </tr>
    <tr>
      <td colspan="2" style="border-bottom: 1px solid black; height: 1px;"></td>
    </tr>
    <tr>
      <td style="font-weight: bold; padding: 4px 8px;">Approved by</td>
      <td style="padding: 4px 8px;">B. Maes</td>
    </tr>
    <tr>
      <td></td>
      <td style="padding: 0 8px 8px 8px;">Project Manager</td>
    </tr>
  </tbody>
</table>
  <img src="/images/image_2_14.png" style="left:116.27999877929688px; top:538.6900634765625px; width:422.0400085449219px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_15.png" style="left:117.5999984741211px; top:664.9299926757812px; width:0.48000335693359375px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_16.png" style="left:117.5999984741211px; top:664.9300537109375px; width:40.91999053955078px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_17.png" style="left:158.52000427246094px; top:665.4099731445312px; width:0.4799957275390625px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_2_18.png" style="left:158.52000427246094px; top:664.9300537109375px; width:46.44000244140625px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_19.png" style="left:204.9600067138672px; top:665.4099731445312px; width:0.4799957275390625px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_2_20.png" style="left:204.9600067138672px; top:664.9300537109375px; width:46.55999755859375px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_21.png" style="left:251.52000427246094px; top:665.4099731445312px; width:0.4799957275390625px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_2_22.png" style="left:251.52000427246094px; top:664.9300537109375px; width:73.08000183105469px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_23.png" style="left:324.6000061035156px; top:665.4099731445312px; width:0.480010986328125px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_2_24.png" style="left:324.6000061035156px; top:664.9300537109375px; width:70.92001342773438px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_25.png" style="left:395.5199890136719px; top:665.4099731445312px; width:0.480010986328125px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_2_26.png" style="left:395.5199890136719px; top:664.9300537109375px; width:77.8800048828125px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_27.png" style="left:473.3999938964844px; top:665.4099731445312px; width:0.480010986328125px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_2_28.png" style="left:473.3999938964844px; top:664.9300537109375px; width:71.39999389648438px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_29.png" style="left:544.3200073242188px; top:664.9299926757812px; width:0.47998046875px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_30.png" style="left:117.5999984741211px; top:666.8500366210938px; width:0.48000335693359375px; height:9.3599853515625px; position:absolute;" />
  <img src="/images/image_2_31.png" style="left:158.52000427246094px; top:666.8500366210938px; width:0.4799957275390625px; height:9.3599853515625px; position:absolute;" />
  <img src="/images/image_2_32.png" style="left:204.9600067138672px; top:666.8500366210938px; width:0.4799957275390625px; height:9.3599853515625px; position:absolute;" />
  <img src="/images/image_2_33.png" style="left:251.52000427246094px; top:666.8500366210938px; width:0.4799957275390625px; height:9.3599853515625px; position:absolute;" />
  <img src="/images/image_2_34.png" style="left:324.6000061035156px; top:666.8500366210938px; width:0.480010986328125px; height:9.3599853515625px; position:absolute;" />
  <img src="/images/image_2_35.png" style="left:395.5199890136719px; top:666.8500366210938px; width:0.480010986328125px; height:9.3599853515625px; position:absolute;" />
  <img src="/images/image_2_36.png" style="left:473.3999938964844px; top:666.8500366210938px; width:0.480010986328125px; height:9.3599853515625px; position:absolute;" />
  <img src="/images/image_2_37.png" style="left:544.3200073242188px; top:666.8500366210938px; width:0.47998046875px; height:9.3599853515625px; position:absolute;" />
  <img src="/images/image_2_38.png" style="left:117.5999984741211px; top:676.2100219726562px; width:0.48000335693359375px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_39.png" style="left:118.08000183105469px; top:676.2100219726562px; width:40.44000244140625px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_40.png" style="left:158.52000427246094px; top:676.2100219726562px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_41.png" style="left:159.0px; top:676.2100219726562px; width:45.959991455078125px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_42.png" style="left:204.9600067138672px; top:676.2100219726562px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_43.png" style="left:205.44000244140625px; top:676.2100219726562px; width:46.08000183105469px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_44.png" style="left:251.52000427246094px; top:676.2100219726562px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_45.png" style="left:252.0px; top:676.2100219726562px; width:72.60000610351562px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_46.png" style="left:324.6000061035156px; top:676.2100219726562px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_47.png" style="left:325.0799865722656px; top:676.2100219726562px; width:70.44000244140625px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_48.png" style="left:395.5199890136719px; top:676.2100219726562px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_49.png" style="left:396.0px; top:676.2100219726562px; width:77.39999389648438px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_50.png" style="left:473.3999938964844px; top:676.2100219726562px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_51.png" style="left:473.8800048828125px; top:676.2100219726562px; width:70.44000244140625px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_52.png" style="left:544.3200073242188px; top:676.2100219726562px; width:0.47998046875px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_53.png" style="left:117.5999984741211px; top:678.1300048828125px; width:0.48000335693359375px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_54.png" style="left:158.52000427246094px; top:678.1300048828125px; width:0.4799957275390625px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_55.png" style="left:204.9600067138672px; top:678.1300048828125px; width:0.4799957275390625px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_56.png" style="left:251.52000427246094px; top:678.1300048828125px; width:0.4799957275390625px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_57.png" style="left:324.6000061035156px; top:678.1300048828125px; width:0.480010986328125px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_58.png" style="left:395.5199890136719px; top:678.1300048828125px; width:0.480010986328125px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_59.png" style="left:473.3999938964844px; top:678.1300048828125px; width:0.480010986328125px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_60.png" style="left:544.3200073242188px; top:678.1300048828125px; width:0.47998046875px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_61.png" style="left:117.5999984741211px; top:687.6100463867188px; width:0.48000335693359375px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_62.png" style="left:118.08000183105469px; top:687.6099853515625px; width:40.44000244140625px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_63.png" style="left:158.52000427246094px; top:687.6100463867188px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_64.png" style="left:159.0px; top:687.6099853515625px; width:45.959991455078125px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_65.png" style="left:204.9600067138672px; top:687.6100463867188px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_66.png" style="left:205.44000244140625px; top:687.6099853515625px; width:46.08000183105469px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_67.png" style="left:251.52000427246094px; top:687.6100463867188px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_68.png" style="left:252.0px; top:687.6099853515625px; width:72.60000610351562px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_69.png" style="left:324.6000061035156px; top:687.6100463867188px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_70.png" style="left:325.0799865722656px; top:687.6099853515625px; width:70.44000244140625px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_71.png" style="left:395.5199890136719px; top:687.6100463867188px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_72.png" style="left:396.0px; top:687.6099853515625px; width:77.39999389648438px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_73.png" style="left:473.3999938964844px; top:687.6100463867188px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_74.png" style="left:473.8800048828125px; top:687.6099853515625px; width:70.44000244140625px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_75.png" style="left:544.3200073242188px; top:687.6100463867188px; width:0.47998046875px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_76.png" style="left:117.5999984741211px; top:689.530029296875px; width:0.48000335693359375px; height:9.3599853515625px; position:absolute;" />
  <img src="/images/image_2_77.png" style="left:158.52000427246094px; top:689.530029296875px; width:0.4799957275390625px; height:9.3599853515625px; position:absolute;" />
  <img src="/images/image_2_78.png" style="left:204.9600067138672px; top:689.530029296875px; width:0.4799957275390625px; height:9.3599853515625px; position:absolute;" />
  <img src="/images/image_2_79.png" style="left:251.52000427246094px; top:689.530029296875px; width:0.4799957275390625px; height:9.3599853515625px; position:absolute;" />
  <img src="/images/image_2_80.png" style="left:324.6000061035156px; top:689.530029296875px; width:0.480010986328125px; height:9.3599853515625px; position:absolute;" />
  <img src="/images/image_2_81.png" style="left:395.5199890136719px; top:689.530029296875px; width:0.480010986328125px; height:9.3599853515625px; position:absolute;" />
  <img src="/images/image_2_82.png" style="left:473.3999938964844px; top:689.530029296875px; width:0.480010986328125px; height:9.3599853515625px; position:absolute;" />
  <img src="/images/image_2_83.png" style="left:544.3200073242188px; top:689.530029296875px; width:0.47998046875px; height:9.3599853515625px; position:absolute;" />
  <img src="/images/image_2_84.png" style="left:117.5999984741211px; top:698.8900146484375px; width:0.48000335693359375px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_85.png" style="left:118.08000183105469px; top:698.8900146484375px; width:40.44000244140625px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_86.png" style="left:158.52000427246094px; top:698.8900146484375px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_87.png" style="left:159.0px; top:698.8900146484375px; width:45.959991455078125px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_88.png" style="left:204.9600067138672px; top:698.8900146484375px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_89.png" style="left:205.44000244140625px; top:698.8900146484375px; width:46.08000183105469px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_90.png" style="left:251.52000427246094px; top:698.8900146484375px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_91.png" style="left:252.0px; top:698.8900146484375px; width:72.60000610351562px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_92.png" style="left:324.6000061035156px; top:698.8900146484375px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_93.png" style="left:325.0799865722656px; top:698.8900146484375px; width:70.44000244140625px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_94.png" style="left:395.5199890136719px; top:698.8900146484375px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_95.png" style="left:396.0px; top:698.8900146484375px; width:77.39999389648438px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_96.png" style="left:473.3999938964844px; top:698.8900146484375px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_97.png" style="left:473.8800048828125px; top:698.8900146484375px; width:70.44000244140625px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_98.png" style="left:544.3200073242188px; top:698.8900146484375px; width:0.47998046875px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_99.png" style="left:117.5999984741211px; top:700.8099975585938px; width:0.48000335693359375px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_100.png" style="left:158.52000427246094px; top:700.8099975585938px; width:0.4799957275390625px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_101.png" style="left:204.9600067138672px; top:700.8099975585938px; width:0.4799957275390625px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_102.png" style="left:251.52000427246094px; top:700.8099975585938px; width:0.4799957275390625px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_103.png" style="left:324.6000061035156px; top:700.8099975585938px; width:0.480010986328125px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_104.png" style="left:395.5199890136719px; top:700.8099975585938px; width:0.480010986328125px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_105.png" style="left:473.3999938964844px; top:700.8099975585938px; width:0.480010986328125px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_106.png" style="left:544.3200073242188px; top:700.8099975585938px; width:0.47998046875px; height:9.47998046875px; position:absolute;" />
  <span style="left:119.27999877929688px; top:716.3411865234375px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">0</span>
  <span style="left:160.1999969482422px; top:712.3811645507812px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">September</span>
  <span style="left:160.1999969482422px; top:720.421142578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">27, 2016</span>
  <span style="left:206.63999938964844px; top:716.3411865234375px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">21</span>
  <span style="left:253.19406127929688px; top:716.3411865234375px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Compliance Report </span>
  <span style="left:326.1437072753906px; top:716.3411865234375px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">S.W. ter Stal</span>
  <span style="left:397.0542907714844px; top:716.3411865234375px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">D. B. Dunnebier</span>
  <span style="left:475.04168701171875px; top:716.3411865234375px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">B. Maes</span>
  <img src="/images/image_2_107.png" style="left:117.5999984741211px; top:710.2900390625px; width:0.48000335693359375px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_108.png" style="left:118.08000183105469px; top:710.2900390625px; width:40.44000244140625px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_109.png" style="left:158.52000427246094px; top:710.2900390625px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_110.png" style="left:159.0px; top:710.2900390625px; width:45.959991455078125px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_111.png" style="left:204.9600067138672px; top:710.2900390625px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_112.png" style="left:205.44000244140625px; top:710.2900390625px; width:46.08000183105469px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_113.png" style="left:251.52000427246094px; top:710.2900390625px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_114.png" style="left:252.0px; top:710.2900390625px; width:72.60000610351562px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_115.png" style="left:324.6000061035156px; top:710.2900390625px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_116.png" style="left:325.0799865722656px; top:710.2900390625px; width:70.44000244140625px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_117.png" style="left:395.5199890136719px; top:710.2900390625px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_118.png" style="left:396.0px; top:710.2900390625px; width:77.39999389648438px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_119.png" style="left:473.3999938964844px; top:710.2900390625px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_120.png" style="left:473.8800048828125px; top:710.2900390625px; width:70.44000244140625px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_2_121.png" style="left:544.3200073242188px; top:710.2900390625px; width:0.47998046875px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_122.png" style="left:117.5999984741211px; top:712.2099609375px; width:0.48000335693359375px; height:17.4000244140625px; position:absolute;" />
  <img src="/images/image_2_123.png" style="left:158.52000427246094px; top:712.2099609375px; width:0.4799957275390625px; height:17.4000244140625px; position:absolute;" />
  <img src="/images/image_2_124.png" style="left:204.9600067138672px; top:712.2099609375px; width:0.4799957275390625px; height:17.4000244140625px; position:absolute;" />
  <img src="/images/image_2_125.png" style="left:251.52000427246094px; top:712.2099609375px; width:0.4799957275390625px; height:17.4000244140625px; position:absolute;" />
  <img src="/images/image_2_126.png" style="left:324.6000061035156px; top:712.2099609375px; width:0.480010986328125px; height:17.4000244140625px; position:absolute;" />
  <img src="/images/image_2_127.png" style="left:395.5199890136719px; top:712.2099609375px; width:0.480010986328125px; height:17.4000244140625px; position:absolute;" />
  <img src="/images/image_2_128.png" style="left:473.3999938964844px; top:712.2099609375px; width:0.480010986328125px; height:17.4000244140625px; position:absolute;" />
  <img src="/images/image_2_129.png" style="left:544.3200073242188px; top:712.2099609375px; width:0.47998046875px; height:17.4000244140625px; position:absolute;" />
  <span style="left:119.27999877929688px; top:731.5811767578125px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Rev.</span>
  <span style="left:160.19366455078125px; top:731.5811767578125px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Date</span>
  <span style="left:206.6273193359375px; top:731.5811767578125px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Pages</span>
  <span style="left:253.18067932128906px; top:731.5811767578125px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Description</span>
  <span style="left:326.1304626464844px; top:731.5811767578125px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Prepared by</span>
  <span style="left:397.0389099121094px; top:731.5811767578125px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Checked by</span>
  <span style="left:475.02703857421875px; top:731.5811767578125px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Approved by</span>
  <img src="/images/image_2_130.png" style="left:117.5999984741211px; top:729.6100463867188px; width:0.48000335693359375px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_131.png" style="left:158.52000427246094px; top:730.0900268554688px; width:0.4799957275390625px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_2_132.png" style="left:204.9600067138672px; top:730.0900268554688px; width:0.4799957275390625px; height:1.44000244140625px; position:absolute;" />
  <img src="images/image_2_133.png" style="left:251.52000427246094px; top:730.0900268554688px; width:0.4799957275390625px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_2_134.png" style="left:324.6000061035156px; top:730.0900268554688px; width:0.480010986328125px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_2_135.png" style="left:395.5199890136719px; top:730.0900268554688px; width:0.480010986328125px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_2_136.png" style="left:473.3999938964844px; top:730.0900268554688px; width:0.480010986328125px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_2_137.png" style="left:544.3200073242188px; top:729.6100463867188px; width:0.47998046875px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_2_138.png" style="left:117.5999984741211px; top:731.52001953125px; width:0.48000335693359375px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_139.png" style="left:158.52000427246094px; top:731.52001953125px; width:0.4799957275390625px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_140.png" style="left:204.9600067138672px; top:731.52001953125px; width:0.4799957275390625px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_141.png" style="left:251.52000427246094px; top:731.52001953125px; width:0.4799957275390625px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_142.png" style="left:324.6000061035156px; top:731.52001953125px; width:0.480010986328125px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_143.png" style="left:395.5199890136719px; top:731.52001953125px; width:0.480010986328125px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_144.png" style="left:473.3999938964844px; top:731.52001953125px; width:0.480010986328125px; height:9.47998046875px; position:absolute;" />
  <img src="/images/image_2_145.png" style="left:544.3200073242188px; top:731.52001953125px; width:0.47998046875px; height:9.47998046875px; position:absolute;" />
  </div>
  <div class="page" id="page-3">
  <span style="left:116.27999877929688px; top:28.381193161010742px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Client:</span>
  <span style="left:137.9158477783203px; top:28.381193161010742px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> Vivo Energy / S.E.P.T.</span>
  <span style="left:116.27999877929688px; top:36.42116928100586px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Location:</span>
  <span style="left:147.63479614257812px; top:36.42116928100586px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> Skhira, Tunisia</span>
  <span style="left:116.27999877929688px; top:44.46120834350586px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Tank Number:</span>
  <span style="left:163.23007202148438px; top:44.46120834350586px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.general.tankIdentification}</span>
  <span style="left:116.27999877929688px; top:52.50118637084961px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Revision Date:</span>
  <span style="left:164.7898406982422px; top:52.50118637084961px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> September 27,2016</span>
  <span style="left:116.27999877929688px; top:60.66122055053711px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">ROSEN Project No.:</span>
  <span style="left:182.30809020996094px; top:60.66122055053711px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> 5-2160-10677</span>
  <span style="left:116.27999877929688px; top:68.70120239257812px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Revision No.:</span>
  <span style="left:160.83096313476562px; top:68.70120239257812px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> 0</span>
   <span style="left:59.52000045776367px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">This document is classified as confidential</span>
  <span style="left:466.2645263671875px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">ROSEN · page 3 of 21</span>
  <span style="left:116.27999877929688px; top:109.03617858886719px; font-size:15.960000038146973px; font-family:'Arial,Bold'; position:absolute">TABLE OF CONTENTS</span>
  <span style="left:56.52000045776367px; top:145.09498596191406px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">1</span>
  <span style="left:116.27999877929688px; top:145.09498596191406px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">EXECUTIVE SUMMARY</span>
  <span style="left:530.3988037109375px; top:145.09498596191406px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">4</span>
  <span style="left:56.52000045776367px; top:173.4149932861328px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">2</span>
  <span style="left:116.27999877929688px; top:173.4149932861328px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">INTRODUCTION</span>
  <span style="left:530.3988037109375px; top:173.4149932861328px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">5</span>
  <span style="left:56.7599983215332px; top:183.85499572753906px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">2.1</span>
  <span style="left:116.27999877929688px; top:183.85499572753906px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Scope of work</span>
  <span style="left:530.3978881835938px; top:183.85499572753906px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">5</span>
  <span style="left:56.52000045776367px; top:212.1750030517578px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">3</span>
  <span style="left:116.27999877929688px; top:212.1750030517578px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">TANK DETAILS</span>
  <span style="left:530.3988037109375px; top:212.1750030517578px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">6</span>
  <span style="left:56.52000045776367px; top:240.49501037597656px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">4</span>
  <span style="left:116.27999877929688px; top:240.49501037597656px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">TANK BOTTOM</span>
  <span style="left:530.3997192382812px; top:240.49501037597656px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">7</span>
  <span style="left:56.7599983215332px; top:250.8150177001953px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">4.1</span>
  <span style="left:116.27999877929688px; top:250.8150177001953px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">General</span>
  <span style="left:530.3978881835938px; top:250.8150177001953px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">7</span>
  <span style="left:56.7599983215332px; top:261.2550354003906px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">4.2</span>
  <span style="left:116.27999877929688px; top:261.2550354003906px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Minimum remaining thickness, corrosion assessment</span>
  <span style="left:530.38427734375px; top:261.2550354003906px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">7</span>
  <span style="left:56.7599983215332px; top:271.5749816894531px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">4.3</span>
  <span style="left:116.27999877929688px; top:271.5749816894531px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Remaining Life Assessment</span>
  <span style="left:530.3897705078125px; top:271.5749816894531px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">8</span>
  <span style="left:56.7599983215332px; top:281.8949890136719px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">4.4</span>
  <span style="left:116.27999877929688px; top:281.8949890136719px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Annular dimensions</span>
  <span style="left:530.3924560546875px; top:281.8949890136719px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">8</span>
  <span style="left:56.7599983215332px; top:292.2149963378906px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">4.5</span>
  <span style="left:116.27999877929688px; top:292.2149963378906px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Bottom external projection</span>
  <span style="left:530.3915405273438px; top:292.2149963378906px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">9</span>
  <span style="left:56.7599983215332px; top:302.6549987792969px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">4.6</span>
  <span style="left:116.27999877929688px; top:302.6549987792969px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Bottom to shell weld</span>
  <span style="left:530.3942260742188px; top:302.6549987792969px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">9</span>
  <span style="left:56.7599983215332px; top:312.9750061035156px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">4.7</span>
  <span style="left:116.27999877929688px; top:312.9750061035156px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Conclusions</span>
  <span style="left:530.3952026367188px; top:312.9750061035156px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">9</span>
  <span style="left:56.52000045776367px; top:341.2950134277344px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">5</span>
  <span style="left:116.27999877929688px; top:341.2950134277344px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">TANK SHELL</span>
  <span style="left:525.4793701171875px; top:341.2950134277344px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">11</span>
  <span style="left:56.7599983215332px; top:351.6150207519531px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">5.1</span>
  <span style="left:116.27999877929688px; top:351.6150207519531px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">General</span>
  <span style="left:525.4775390625px; top:351.6150207519531px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">11</span>
  <span style="left:56.7599983215332px; top:362.0550231933594px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">5.2</span>
  <span style="left:116.27999877929688px; top:362.0550231933594px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Hydrostatic Load</span>
  <span style="left:525.4757690429688px; top:362.0550231933594px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">11</span>
  <span style="left:56.7599983215332px; top:372.375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">5.3</span>
  <span style="left:116.27999877929688px; top:372.375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Roof Load</span>
  <span style="left:525.4776000976562px; top:372.375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">11</span>
  <span style="left:56.7599983215332px; top:382.69500732421875px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">5.4</span>
  <span style="left:116.27999877929688px; top:382.69500732421875px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Wind Load, Buckling</span>
  <span style="left:525.4730834960938px; top:382.69500732421875px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">12</span>
  <span style="left:56.7599983215332px; top:393.0150146484375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">5.5</span>
  <span style="left:116.27999877929688px; top:393.0150146484375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Wind Load, Overturning stability</span>
  <span style="left:525.4703369140625px; top:393.0150146484375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">12</span>
  <span style="left:56.7599983215332px; top:403.45501708984375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">5.6</span>
  <span style="left:116.27999877929688px; top:403.45501708984375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Conclusions</span>
  <span style="left:525.4749145507812px; top:403.45501708984375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">13</span>
  <span style="left:56.52000045776367px; top:431.7750244140625px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">6</span>
  <span style="left:116.27999877929688px; top:431.7750244140625px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">FIXED TANK ROOF</span>
  <span style="left:525.4784545898438px; top:431.7750244140625px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">14</span>
  <span style="left:56.7599983215332px; top:442.0950012207031px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">6.1</span>
  <span style="left:116.27999877929688px; top:442.0950012207031px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">General</span>
  <span style="left:525.4775390625px; top:442.0950012207031px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">14</span>
  <span style="left:56.7599983215332px; top:452.4150085449219px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">6.2</span>
  <span style="left:116.27999877929688px; top:452.4150085449219px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Compression Area</span>
  <span style="left:525.4757690429688px; top:452.4150085449219px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">14</span>
  <span style="left:56.7599983215332px; top:462.7350158691406px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">6.3</span>
  <span style="left:116.27999877929688px; top:462.7350158691406px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Roof Supporting Structure</span>
  <span style="left:525.4757690429688px; top:462.7350158691406px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">14</span>
  <span style="left:56.7599983215332px; top:473.1750183105469px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">6.4</span>
  <span style="left:116.27999877929688px; top:473.1750183105469px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Frangibility</span>
  <span style="left:525.4739990234375px; top:473.1750183105469px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">15</span>
  <span style="left:56.7599983215332px; top:483.4950256347656px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">6.5</span>
  <span style="left:116.27999877929688px; top:483.4950256347656px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Venting requirements</span>
  <span style="left:525.474853515625px; top:483.4950256347656px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">15</span>
  <span style="left:56.7599983215332px; top:493.81500244140625px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">6.6</span>
  <span style="left:116.27999877929688px; top:493.81500244140625px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Conclusions</span>
  <span style="left:525.4749145507812px; top:493.81500244140625px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">16</span>
  <span style="left:56.52000045776367px; top:522.135009765625px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">7</span>
  <span style="left:116.27999877929688px; top:522.135009765625px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">FOUNDATION</span>
  <span style="left:525.4793701171875px; top:522.135009765625px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">17</span>
  <span style="left:56.7599983215332px; top:532.574951171875px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">7.1</span>
  <span style="left:116.27999877929688px; top:532.574951171875px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">General</span>
  <span style="left:525.4775390625px; top:532.574951171875px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">17</span>
  <span style="left:56.7599983215332px; top:542.89501953125px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">7.2</span>
  <span style="left:116.27999877929688px; top:542.89501953125px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Differential settlement</span>
  <span style="left:525.47216796875px; top:542.89501953125px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">17</span>
  <span style="left:56.7599983215332px; top:553.2149658203125px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">7.3</span>
  <span style="left:116.27999877929688px; top:553.2149658203125px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Edge Settlement</span>
  <span style="left:525.4757690429688px; top:553.2149658203125px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">17</span>
  <span style="left:56.7599983215332px; top:563.5349731445312px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">7.4</span>
  <span style="left:116.27999877929688px; top:563.5349731445312px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Out of verticality</span>
  <span style="left:525.4739990234375px; top:563.5349731445312px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">18</span>
  <span style="left:56.7599983215332px; top:573.9749755859375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">7.5</span>
  <span style="left:116.27999877929688px; top:573.9749755859375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Conclusion</span>
  <span style="left:525.4757690429688px; top:573.9749755859375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">18</span>
  <span style="left:56.52000045776367px; top:602.2949829101562px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">8</span>
  <span style="left:116.27999877929688px; top:602.2949829101562px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">INSPECTION INTERVAL</span>
  <span style="left:525.4776000976562px; top:602.2949829101562px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">19</span>
  <span style="left:56.52000045776367px; top:630.614990234375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">9</span>
  <span style="left:116.27999877929688px; top:630.614990234375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">SUMMARY OF RECOMMENDATIONS</span>
  <span style="left:525.481201171875px; top:630.614990234375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">20</span>
  <span style="left:56.7599983215332px; top:640.9349975585938px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">9.1</span>
  <span style="left:116.27999877929688px; top:640.9349975585938px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Bottom</span>
  <span style="left:525.478515625px; top:640.9349975585938px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">20</span>
  <span style="left:56.7599983215332px; top:651.375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">9.2</span>
  <span style="left:116.27999877929688px; top:651.375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Bottom - Annular</span>
  <span style="left:525.475830078125px; top:651.375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">20</span>
  <span style="left:56.7599983215332px; top:661.6949462890625px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">9.3</span>
  <span style="left:116.27999877929688px; top:661.6949462890625px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Out of Verticality</span>
  <span style="left:525.475830078125px; top:661.6949462890625px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">20</span>
  <span style="left:56.52000045776367px; top:690.0150146484375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">10</span>
  <span style="left:116.27999877929688px; top:690.0150146484375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">REFERENCES AND ABBREVIATION</span>
  <span style="left:525.478515625px; top:690.0150146484375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">21</span>
  <span style="left:56.7599983215332px; top:700.3349609375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">10.1</span>
  <span style="left:116.27999877929688px; top:700.3349609375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">References</span>
  <span style="left:525.4776000976562px; top:700.3349609375px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">21</span>
  <span style="left:56.7599983215332px; top:710.7749633789062px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">10.2</span>
  <span style="left:116.27999877929688px; top:710.7749633789062px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">Abbreviations</span>
  <span style="left:525.4766845703125px; top:710.7749633789062px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">21</span>
  <span style="left:56.52000045776367px; top:739.094970703125px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;">APPENDICES: COMPLIANCE CALCULATIONS</span>
  </div>
  <div class="page" id="page-4">
  <span style="left:116.27999877929688px; top:28.381193161010742px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Client:</span>
  <span style="left:137.9158477783203px; top:28.381193161010742px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> Vivo Energy / S.E.P.T.</span>
  <span style="left:116.27999877929688px; top:36.42116928100586px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Location:</span>
  <span style="left:147.63479614257812px; top:36.42116928100586px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> Skhira, Tunisia</span>
  <span style="left:116.27999877929688px; top:44.46120834350586px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Tank Number:</span>
  <span style="left:163.23007202148438px; top:44.46120834350586px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.general.tankIdentification}</span>
  <span style="left:116.27999877929688px; top:52.50118637084961px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Revision Date:</span>
  <span style="left:164.7898406982422px; top:52.50118637084961px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> September 27,2016</span>
  <span style="left:116.27999877929688px; top:60.66122055053711px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">ROSEN Project No.:</span>
  <span style="left:182.30809020996094px; top:60.66122055053711px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> 5-2160-10677</span>
  <span style="left:116.27999877929688px; top:68.70120239257812px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Revision No.:</span>
  <span style="left:160.83096313476562px; top:68.70120239257812px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> 0</span>
  <span style="left:59.52000045776367px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">This document is classified as confidential</span>
  <span style="left:466.2645263671875px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">ROSEN · page 4 of 21</span>
  <span style="left:56.7599983215332px; top:109.03617858886719px; font-size:15.960000038146973px; font-family:'Arial,Bold'; position:absolute;">1</span>
  <span style="left:80.27643585205078px; top:109.03617858886719px; font-size:15.960000038146973px; font-family:'Arial,Bold'; position:absolute;">EXECUTIVE SUMMARY</span>
<span style="left:80.28px; top:146.65px; font-size:11px; font-family:'Arial'; position:absolute;">
  This section provides a summary of the evaluation of the suitability for continued services of the
</span>
<span style="left:80.28px; top:162.65px; font-size:11px; font-family:'Arial'; position:absolute;">
  concerned tank in accordance with API 653. The condition of tank ${data.general.tankIdentification} has been checked by means of
</span>
<span style="left:80.28px; top:178.65px; font-size:11px; font-family:'Arial'; position:absolute;">
  a Full Detailed Inspection Survey. The survey includes inspection of the tank exterior and interior in
</span>
<span style="left:80.28px; top:194.65px; font-size:11px; font-family:'Arial'; position:absolute;">
  accordance with API 653 specifications and has been reported in the Final Inspection Report [1].
</span>
<span style="left:80.28px; top:210.65px; font-size:11px; font-family:'Arial'; position:absolute;">
  The table below summarizes the compliance checks on basis of the inspection findings [1].
</span>
  <span style="left:161.75999450683594px; top:241.8128662109375px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">Load case</span>
  <span style="left:239.5545654296875px; top:241.8128662109375px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">Section</span>
  <span style="left:296.4913024902344px; top:241.8128662109375px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">Compliance</span>
  <span style="left:425.94708251953125px; top:241.8128662109375px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">Remarks</span>
  <span style="left:290.1600036621094px; top:256.45281982421875px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">2016</span>
  <span style="left:332.8338928222656px; top:256.45281982421875px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">2026</span>
  <span style="left:119.16000366210938px; top:271.09283447265625px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">1</span>
  <span style="left:134.0399932861328px; top:271.21282958984375px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">Bottom plates</span>
  <span style="left:249.60000610351562px; top:271.21282958984375px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">04</span>
  <span style="left:294.6000061035156px; top:270.26119995117188px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <span style="left:337.32000732421875px; top:270.26119995117188px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <span style="left:365.0400085449219px; top:271.22122192382812px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Annular plate dimensions do not satisfy the design</span>
  <span style="left:365.0400085449219px; top:279.2611999511719px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">parameters according ${data.general.designStandards}, section 5.5 However no</span>
  <span style="left:365.0400085449219px; top:287.3011779785156px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">annular is required, therefore no action needed.</span>
  <img src="/images/image_4_146.png" style="left:116.27999877929688px; top:268.05003356933594px; width:425.8800354003906px; height:0.4799957275390625px; position:absolute;" />
  <span style="left:119.16000366210938px; top:300.61285400390625px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">2</span>
  <span style="left:134.0399932861328px; top:300.73284912109375px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">Liquid load (product)</span>
  <span style="left:249.60000610351562px; top:300.73284912109375px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">05</span>
  <span style="left:294.6000061035156px; top:299.7812194824219px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <span style="left:337.3142395019531px; top:299.7812194824219px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <img src="/images/image_4_147.png" style="left:116.27999877929688px; top:297.6899719238281px; width:425.8800354003906px; height:0.480010986328125px; position:absolute;" />
  <span style="left:119.16000366210938px; top:315.25286865234375px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">3</span>
  <span style="left:134.0399932861328px; top:315.37286376953125px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">Liquid load (hydrotest)</span>
  <span style="left:249.60000610351562px; top:315.37286376953125px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">05</span>
  <span style="left:294.6000061035156px; top:314.4211730957031px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <span style="left:337.3142395019531px; top:314.4211730957031px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <img src="/images/image_4_148.png" style="left:116.27999877929688px; top:312.2099914550781px; width:425.8800354003906px; height:0.480010986328125px; position:absolute;" />
  <span style="left:119.16000366210938px; top:329.7728271484375px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">4</span>
  <span style="left:134.0399932861328px; top:329.892822265625px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">Shell uniform load</span>
  <span style="left:249.60000610351562px; top:329.892822265625px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">05</span>
  <span style="left:294.6000061035156px; top:328.9411926269531px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <span style="left:337.3142395019531px; top:328.9411926269531px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <img src="/images/image_4_149.png" style="left:116.27999877929688px; top:326.8500061035156px; width:425.8800354003906px; height:0.480010986328125px; position:absolute;" />
  <span style="left:119.16000366210938px; top:344.412841796875px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">5</span>
  <span style="left:134.0399932861328px; top:344.5328369140625px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">Wind load – stiffeners</span>
  <span style="left:249.60000610351562px; top:344.5328369140625px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">05</span>
  <span style="left:294.6000061035156px; top:343.5812072753906px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <span style="left:337.3142395019531px; top:343.5812072753906px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <img src="/images/image_4_150.png" style="left:116.27999877929688px; top:341.4899597167969px; width:425.8800354003906px; height:0.480010986328125px; position:absolute;" />
  <span style="left:119.16000366210938px; top:359.0528564453125px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">6</span>
  <span style="left:134.0399932861328px; top:359.1728515625px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">Wind load overturning</span>
  <span style="left:249.60000610351562px; top:359.1728515625px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">05</span>
  <span style="left:294.6000061035156px; top:358.22119140625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <span style="left:336.0px; top:358.22119140625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">N/A</span>
  <img src="/images/image_4_151.png" style="left:116.27999877929688px; top:356.0099792480469px; width:425.8800354003906px; height:0.480010986328125px; position:absolute;" />
  <span style="left:119.16000366210938px; top:373.5728454589844px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">7</span>
  <span style="left:134.0399932861328px; top:373.6928405761719px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">Roof plates</span>
  <span style="left:249.60000610351562px; top:373.6928405761719px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">06</span>
  <span style="left:294.6000061035156px; top:372.7412109375px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <span style="left:335.99462890625px; top:372.7412109375px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">N/A</span>
  <img src="/images/image_4_152.png" style="left:116.27999877929688px; top:370.6499938964844px; width:425.8800354003906px; height:0.480010986328125px; position:absolute;" />
  <span style="left:119.16000366210938px; top:388.2128601074219px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">8</span>
  <span style="left:134.0399932861328px; top:388.3328552246094px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">Roof supporting structure</span>
  <span style="left:249.60000610351562px; top:388.3328552246094px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">06</span>
  <span style="left:294.6000061035156px; top:387.3811950683594px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <span style="left:335.99462890625px; top:387.3811950683594px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">N/A</span>
  <img src="/images/image_4_153.png" style="left:116.27999877929688px; top:385.28997802734375px; width:425.8800354003906px; height:0.480010986328125px; position:absolute;" />
  <span style="left:119.16000366210938px; top:402.85284423828125px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">9</span>
  <span style="left:134.0399932861328px; top:402.97283935546875px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">Top curb angle</span>
  <span style="left:249.60000610351562px; top:402.97283935546875px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">06</span>
  <span style="left:294.6000061035156px; top:402.0212097167969px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <span style="left:335.99462890625px; top:402.0212097167969px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">N/A</span>
  <img src="/images/image_4_154.png" style="left:116.27999877929688px; top:399.80999755859375px; width:425.8800354003906px; height:0.480010986328125px; position:absolute;" />
  <span style="left:119.16000366210938px; top:417.37286376953125px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">10</span>
  <span style="left:128.06045532226562px; top:417.37286376953125px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;"> Frangibility</span>
  <span style="left:172.8000030517578px; top:417.2078552246094px; font-size:5.03000020980835px; font-family:'Arial'; position:absolute;">(1)</span>
  <span style="left:249.60000610351562px; top:417.49285888671875px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">06</span>
  <span style="left:293.2799987792969px; top:416.54119873046875px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">N/A</span>
  <span style="left:335.99420166015625px; top:416.54119873046875px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">N/A</span>
  <img src="/images/image_4_155.png" style="left:116.27999877929688px; top:414.4499816894531px; width:425.8800354003906px; height:0.480010986328125px; position:absolute;" />
  <span style="left:119.16000366210938px; top:432.0128479003906px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">11</span>
  <span style="left:128.06045532226562px; top:432.0128479003906px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;"> Venting requirements</span>
  <span style="left:249.60000610351562px; top:432.1328430175781px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">06</span>
  <span style="left:294.6000061035156px; top:431.18121337890625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <span style="left:335.99462890625px; top:431.18121337890625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">N/A</span>
  <img src="/images/image_4_156.png" style="left:116.27999877929688px; top:429.0899963378906px; width:425.8800354003906px; height:0.480010986328125px; position:absolute;" />
  <span style="left:119.16000366210938px; top:446.5328369140625px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">12</span>
  <span style="left:128.06045532226562px; top:446.5328369140625px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;"> Bottom settlement</span>
  <span style="left:249.60000610351562px; top:446.6528625488281px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">07</span>
  <span style="left:294.6000061035156px; top:475.7012023925781px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <span style="left:336.0px; top:475.7012023925781px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">N/A</span>
  <img src="/images/image_4_157.png" style="left:116.27999877929688px; top:443.6099853515625px; width:425.8800354003906px; height:0.480010986328125px; position:absolute;" />
  <span style="left:119.16000366210938px; top:461.1728515625px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">13</span>
  <span style="left:128.06045532226562px; top:461.1728515625px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;"> Differential settlement</span>
  <span style="left:249.60000610351562px; top:461.2928466796875px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">07</span>
  <span style="left:294.6000061035156px; top:460.3412170410156px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <span style="left:335.99462890625px; top:460.3412170410156px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">N/A</span>
  <img src="/images/image_4_158.png" style="left:116.27999877929688px; top:458.25px; width:425.8800354003906px; height:0.480010986328125px; position:absolute;" />
  <span style="left:119.16000366210938px; top:475.8128356933594px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">14</span>
  <span style="left:128.06045532226562px; top:475.8128356933594px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;"> Edge settlement</span>
  <span style="left:249.60000610351562px; top:475.932861328125px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">07</span>
  <span style="left:294.6000061035156px; top:474.981201171875px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <span style="left:335.99462890625px; top:474.981201171875px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">N/A</span>
  <img src="/images/image_4_159.png" style="left:116.27999877929688px; top:472.8899841308594px; width:425.8800354003906px; height:0.480010986328125px; position:absolute;" />
  <span style="left:119.16000366210938px; top:490.3328552246094px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">15</span>
  <span style="left:128.06045532226562px; top:490.3328552246094px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;"> Out-of-verticality</span>
  <span style="left:249.60000610351562px; top:490.4528503417969px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">07</span>
  <span style="left:294.6000061035156px; top:489.5011901855469px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Ok</span>
  <span style="left:335.99462890625px; top:489.5011901855469px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">N/A</span>
  <img src="/images/image_4_160.png" style="left:116.27999877929688px; top:487.4100036621094px; width:425.8800354003906px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_4_161.png" style="left:115.55999755859375px; top:502.04998779296875px; width:15.720001220703125px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_4_162.png" style="left:130.55999755859375px; top:502.04998779296875px; width:101.04000854492188px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_4_163.png" style="left:230.8800048828125px; top:502.04998779296875px; width:45.720001220703125px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_4_164.png" style="left:275.8800048828125px; top:502.04998779296875px; width:45.720001220703125px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_4_165.png" style="left:320.8800048828125px; top:502.04998779296875px; width:41.279998779296875px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_4_166.png" style="left:361.44000244140625px; top:502.04998779296875px; width:180.72003173828125px; height:0.480010986328125px; position:absolute;" />
  <span style="left:116.27999877929688px; top:502.7012023925781px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">(1) Please note that the frangibility is a safety requirement and not related to the tank integrity.</span>
  <span style="left:116.27999877929688px; top:521.135009765625px; font-size:9.0px; font-family:'Arial'; position:absolute;">Above compliance results are only valid for the operational conditions/window as described hereinafter. It</span>
  <span style="left:116.27999877929688px; top:531.5749816894531px; font-size:9.0px; font-family:'Arial'; position:absolute;">is recommended that prior to any change to the operational window; a competent tank engineer is</span>
  <span style="left:116.27999877929688px; top:541.89501953125px; font-size:9.0px; font-family:'Arial'; position:absolute;">consulted to review the mechanical effect on concerned tank.</span>
  </div>
  <div class="page" id="page-5">
  <span style="left:116.27999877929688px; top:28.381193161010742px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Client:</span>
  <span style="left:137.9158477783203px; top:28.381193161010742px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> Vivo Energy / S.E.P.T.</span>
  <span style="left:116.27999877929688px; top:36.42116928100586px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Location:</span>
  <span style="left:147.63479614257812px; top:36.42116928100586px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> Skhira, Tunisia</span>
  <span style="left:116.27999877929688px; top:44.46120834350586px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Tank Number:</span>
  <span style="left:163.23007202148438px; top:44.46120834350586px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.general.tankIdentification}</span>
  <span style="left:116.27999877929688px; top:52.50118637084961px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Revision Date:</span>
  <span style="left:164.7898406982422px; top:52.50118637084961px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> September 27,2016</span>
  <span style="left:116.27999877929688px; top:60.66122055053711px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">ROSEN Project No.:</span>
  <span style="left:182.30809020996094px; top:60.66122055053711px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> 5-2160-10677</span>
  <span style="left:116.27999877929688px; top:68.70120239257812px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Revision No.:</span>
  <span style="left:160.83096313476562px; top:68.70120239257812px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> 0</span>
  <span style="left:59.52000045776367px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">This document is classified as confidential</span>
  <span style="left:466.2645263671875px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">ROSEN · page 5 of 21</span>
  <span style="left:56.7599983215332px; top:108.91618347167969px; font-size:15.960000038146973px; font-family:'Arial,Bold'; position:absolute;">2</span>
  <span style="left:116.27643585205078px; top:108.91618347167969px; font-size:15.960000038146973px; font-family:'Arial,Bold'; position:absolute;">INTRODUCTION</span>
  <div style="font-size:15px!important;">
  <span style="left:116.27999877929688px; top:136.33497619628906px; font-size:9.0px; font-family:'Arial'; position:absolute;">The condition of tank ${data.general.tankIdentification} has been checked by means of a Full Detailed Inspection Survey. The</span>
  <span style="left:116.27999877929688px; top:146.6549835205078px; font-size:9.0px; font-family:'Arial'; position:absolute;">survey includes inspection of the tank exterior and interior in accordance with API 653 checklist,</span>
  <span style="left:116.27999877929688px; top:157.09498596191406px; font-size:9.0px; font-family:'Arial'; position:absolute;">Appendix C, specifications and has been reported in the Final Inspection Report [1].</span>
  <span style="left:116.27999877929688px; top:167.4149932861328px; font-size:9.0px; font-family:'Arial'; position:absolute;">The tank details and survey measurements included in the Final Inspection Report [1] are used to</span>
  <span style="left:116.27999877929688px; top:177.73500061035156px; font-size:9.0px; font-family:'Arial'; position:absolute;">perform load calculations and design checks as per API 653 and ${data.general.designStandards} , the results are contained in</span>
  <span style="left:116.27999877929688px; top:188.0550079345703px; font-size:9.0px; font-family:'Arial'; position:absolute;">the present document.</span>
  </div>
  <span style="left:56.7599983215332px; top:234.42002868652344px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">2.1</span>
  <span style="left:116.28001403808594px; top:234.42002868652344px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">Scope of work</span>
  <span style="left:116.27999877929688px; top:257.2950134277344px; font-size:9.0px; font-family:'Arial'; position:absolute;">The present report contains the evaluation of the suitability for continued services of the concerned tank</span>
  <span style="left:116.27999877929688px; top:267.6150207519531px; font-size:9.0px; font-family:'Arial'; position:absolute;">in accordance with API 653. The rules given in this standard are minimum requirements and are not to</span>
  <span style="left:116.27999877929688px; top:277.9350280761719px; font-size:9.0px; font-family:'Arial'; position:absolute;">be interpreted as approving, recommending, or endorsing any specific design nor limiting the methods of</span>
  <span style="left:116.27999877929688px; top:288.2550354003906px; font-size:9.0px; font-family:'Arial'; position:absolute;">inspection, repair, alteration, or reconstruction. Where seems necessary, personnel with proven</span>
  <span style="left:116.27999877929688px; top:298.6950378417969px; font-size:9.0px; font-family:'Arial'; position:absolute;">experienced in tank integrity calculations may consider the use of other codes since API653 is not</span>
  <span style="left:116.27999877929688px; top:309.0149841308594px; font-size:9.0px; font-family:'Arial'; position:absolute;">considered all-inclusive. In such case, this report will refer to the applied standard and describe the</span>
  <span style="left:116.27999877929688px; top:319.3349914550781px; font-size:9.0px; font-family:'Arial'; position:absolute;">reason of deviation to the API 653.</span>
  <span style="left:116.27999877929688px; top:340.0950012207031px; font-size:9.0px; font-family:'Arial'; position:absolute;">The evaluation of the suitability for continued services of the concerned tank in accordance with API 653,</span>
  <span style="left:116.27999877929688px; top:350.4150085449219px; font-size:9.0px; font-family:'Arial'; position:absolute;">refers to those elements related to the steel part of the tank and includes the calculations enlisted below.</span>
  <span style="left:116.27999877929688px; top:371.0550231933594px; font-size:9.0px; font-family:'Arial'; position:absolute;">1.</span>
  <span style="left:134.2790985107422px; top:371.0550231933594px; font-size:9.0px; font-family:'Arial'; position:absolute;">Bottom assessment, including: corrosion, remaining life, annular design and external projection</span>
  <span style="left:116.27999877929688px; top:381.4950256347656px; font-size:9.0px; font-family:'Arial'; position:absolute;">2.</span>
  <span style="left:134.2790985107422px; top:381.4950256347656px; font-size:9.0px; font-family:'Arial'; position:absolute;">Minimum thickness of the tank shell per shell course, this includes :</span>
  <span style="left:134.27999877929688px; top:391.81500244140625px; font-size:9.0px; font-family:'Arial'; position:absolute;">2.1. Calculation hoop stress in the tank shell with water stored (S.G. = 1.0) at ambient temperature</span>
  <span style="left:134.27999877929688px; top:402.135009765625px; font-size:9.0px; font-family:'Arial'; position:absolute;">2.2. Calculation hoop stress in the tank shell with the stored product at storage temperature</span>
  <span style="left:134.27999877929688px; top:412.45501708984375px; font-size:9.0px; font-family:'Arial'; position:absolute;">2.3. Axial load in the tank shell according to the roof construction loads and life loads</span>
  <span style="left:116.27999877929688px; top:422.7750244140625px; font-size:9.0px; font-family:'Arial'; position:absolute;">3.</span>
  <span style="left:134.2790985107422px; top:422.7750244140625px; font-size:9.0px; font-family:'Arial'; position:absolute;">Stability of the tank roof under wind load (wind stiffener requirements)</span>
  <span style="left:116.27999877929688px; top:433.2149963378906px; font-size:9.0px; font-family:'Arial'; position:absolute;">4.</span>
  <span style="left:134.2790985107422px; top:433.2149963378906px; font-size:9.0px; font-family:'Arial'; position:absolute;">Maximum allowable internal pressure (top curb angle requirements)</span>
  <span style="left:116.27999877929688px; top:443.5350036621094px; font-size:9.0px; font-family:'Arial'; position:absolute;">5.</span>
  <span style="left:134.2790985107422px; top:443.5350036621094px; font-size:9.0px; font-family:'Arial'; position:absolute;">Check roof stress in roof plates</span>
  <span style="left:116.27999877929688px; top:453.8550109863281px; font-size:9.0px; font-family:'Arial'; position:absolute;">6.</span>
  <span style="left:134.2790985107422px; top:453.8550109863281px; font-size:9.0px; font-family:'Arial'; position:absolute;">Overturning stability</span>
  <span style="left:116.27999877929688px; top:464.1750183105469px; font-size:9.0px; font-family:'Arial'; position:absolute;">7.</span>
  <span style="left:134.2790985107422px; top:464.1750183105469px; font-size:9.0px; font-family:'Arial'; position:absolute;">Required venting capacity</span>
  <span style="left:116.27999877929688px; top:474.6150207519531px; font-size:9.0px; font-family:'Arial'; position:absolute;">8.</span>
  <span style="left:134.2790985107422px; top:474.6150207519531px; font-size:9.0px; font-family:'Arial'; position:absolute;">Settlement assessment, including: Bottom sagging, Differential Settlement, Edge settlement and</span>
  <span style="left:134.27999877929688px; top:484.93499755859375px; font-size:9.0px; font-family:'Arial'; position:absolute;">plumbness.</span>
  <span style="left:116.27999877929688px; top:505.5749816894531px; font-size:9.0px; font-family:'Arial'; position:absolute;">All items/components not mentioned in this note, are assumed to be designed and function properly or</span>
  <span style="left:116.27999877929688px; top:516.0150146484375px; font-size:9.0px; font-family:'Arial'; position:absolute;">are outside the agreed scope of work.</span>
  <span style="left:116.27999877929688px; top:536.6549682617188px; font-size:9.0px; font-family:'Arial'; position:absolute;">In case that repairs are required, repair advise and recommendations will be provided in the present</span>
  <span style="left:116.27999877929688px; top:546.9749755859375px; font-size:9.0px; font-family:'Arial'; position:absolute;">report in agreement with API 653, except otherwise stated.</span>
  <span style="left:116.27999877929688px; top:567.7349853515625px; font-size:9.0px; font-family:'Arial'; position:absolute;">While settlement analysis is part of the assessment, the direct consequences due to settlement problems</span>
  <span style="left:116.27999877929688px; top:578.0549926757812px; font-size:9.0px; font-family:'Arial'; position:absolute;">(if any) are not included since this will require specialist advice from tank engineers and or geotechnical</span>
  <span style="left:116.27999877929688px; top:588.375px; font-size:9.0px; font-family:'Arial'; position:absolute;">experts. However, report will advise any necessary follow up. The calculations performed in the present</span>
  <span style="left:116.27999877929688px; top:598.8150024414062px; font-size:9.0px; font-family:'Arial'; position:absolute;">report do not include seismic loads.</span>
  </div>
  <div class="page" id="page-6">
  <span style="left:116.27999877929688px; top:28.381193161010742px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Client:</span>
  <span style="left:137.9158477783203px; top:28.381193161010742px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> Vivo Energy / S.E.P.T.</span>
  <span style="left:116.27999877929688px; top:36.42116928100586px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Location:</span>
  <span style="left:147.63479614257812px; top:36.42116928100586px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> Skhira, Tunisia</span>
  <span style="left:116.27999877929688px; top:44.46120834350586px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Tank Number:</span>
  <span style="left:163.23007202148438px; top:44.46120834350586px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> ${data.general.tankIdentification}</span>
  <span style="left:116.27999877929688px; top:52.50118637084961px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Revision Date:</span>
  <span style="left:164.7898406982422px; top:52.50118637084961px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> September 27,2016</span>
  <span style="left:116.27999877929688px; top:60.66122055053711px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">ROSEN Project No.:</span>
  <span style="left:182.30809020996094px; top:60.66122055053711px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> 5-2160-10677</span>
  <span style="left:116.27999877929688px; top:68.70120239257812px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Revision No.:</span>
  <span style="left:160.83096313476562px; top:68.70120239257812px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> 0</span>
  <span style="left:59.52000045776367px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">This document is classified as confidential</span>
  <span style="left:466.2645263671875px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">ROSEN · page 6 of 21</span>
  <span style="left:56.7599983215332px; top:108.91618347167969px; font-size:15.960000038146973px; font-family:'Arial,Bold'; position:absolute;">3</span>
  <span style="left:116.27643585205078px; top:108.91618347167969px; font-size:15.960000038146973px; font-family:'Arial,Bold'; position:absolute;">TANK DETAILS</span>
  <span style="left:116.27999877929688px; top:136.33497619628906px; font-size:9.0px; font-family:'Arial'; position:absolute;">The following is a brief summary of the tank details. Other parameters are included in the document</span>
  <span style="left:116.27999877929688px; top:146.6549835205078px; font-size:9.0px; font-family:'Arial'; position:absolute;">where relevant.</span>
  <span style="left:208.9199981689453px; top:169.14120483398438px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">General</span>
  <span style="left:393.1199951171875px; top:169.14120483398438px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Operational Conditions</span>
  <img src="/images/image_6_167.png" style="left:327.239990234375px; top:167.6500244140625px; width:0.480010986328125px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_6_168.png" style="left:327.239990234375px; top:169.09002685546875px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:119.16000366210938px; top:181.62118530273438px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Tank identification</span>
  <span style="left:281.760009765625px; top:182.10122680664062px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.general.tankIdentification}</span>
  <span style="left:330.3599853515625px; top:181.62118530273438px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Product stored</span>
  <span style="left:483.8399963378906px; top:182.10122680664062px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.operationalConditions.productStored}</span>
  <img src="/images/image_6_169.png" style="left:254.0399932861328px; top:180.010009765625px; width:0.4799957275390625px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_6_170.png" style="left:327.239990234375px; top:180.010009765625px; width:0.480010986328125px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_6_171.png" style="left:460.79998779296875px; top:180.010009765625px; width:0.480010986328125px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_6_172.png" style="left:254.0399932861328px; top:181.44000244140625px; width:0.4799957275390625px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_173.png" style="left:327.239990234375px; top:181.44000244140625px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_174.png" style="left:460.79998779296875px; top:181.44000244140625px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <span style="left:119.16000366210938px; top:194.10122680664062px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Tank type</span>
  <span style="left:283.0799865722656px; top:194.58120727539062px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.general.tankType}</span>
  <span style="left:330.3599853515625px; top:194.10122680664062px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Gravity of product</span>
  <span style="left:442.1834411621094px; top:194.10122680664062px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[-]</span>
  <span style="left:491.2799987792969px; top:194.58120727539062px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.operationalConditions.gravityOfProduct}</span>
  <img src="/images/image_6_175.png" style="left:116.27999877929688px; top:192.00999450683594px; width:137.75999450683594px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_176.png" style="left:254.0399932861328px; top:192.00999450683594px; width:0.4799957275390625px; height:1.9199981689453125px; position:absolute;" />
  <img src="/images/image_6_177.png" style="left:254.52000427246094px; top:192.00999450683594px; width:72.71998596191406px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_178.png" style="left:327.239990234375px; top:192.00999450683594px; width:0.480010986328125px; height:1.9199981689453125px; position:absolute;" />
  <img src="/images/image_6_179.png" style="left:327.7200012207031px; top:192.00999450683594px; width:133.07998657226562px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_180.png" style="left:460.79998779296875px; top:192.00999450683594px; width:0.480010986328125px; height:1.9199981689453125px; position:absolute;" />
  <img src="/images/image_6_181.png" style="left:461.2799987792969px; top:192.00999450683594px; width:74.16000366210938px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_182.png" style="left:254.0399932861328px; top:193.92999267578125px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_183.png" style="left:327.239990234375px; top:193.92999267578125px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_184.png" style="left:460.79998779296875px; top:193.92999267578125px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:119.16000366210938px; top:206.46121215820312px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Design standards</span>
  <span style="left:278.3999938964844px; top:206.94119262695312px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.general.designStandards}</span>
  <span style="left:330.3599853515625px; top:206.46121215820312px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Storage temperature</span>
  <span style="left:438.94622802734375px; top:206.46121215820312px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[</span>
  <span style="left:440.8800048828125px; top:206.1222381591797px; font-size:4.550000190734863px; font-family:'Arial'; position:absolute;">o</span>
  <span style="left:443.3999938964844px; top:206.46121215820312px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">C]</span>
  <span style="left:494.2799987792969px; top:206.94119262695312px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.operationalConditions.storageTemperature}</span>
  <img src="/images/image_6_185.png" style="left:116.27999877929688px; top:204.36997985839844px; width:137.75999450683594px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_186.png" style="left:254.0399932861328px; top:204.36997985839844px; width:0.4799957275390625px; height:1.9199981689453125px; position:absolute;" />
  <img src="/images/image_6_187.png" style="left:254.52000427246094px; top:204.36997985839844px; width:72.71998596191406px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_188.png" style="left:327.239990234375px; top:204.36997985839844px; width:0.480010986328125px; height:1.9199981689453125px; position:absolute;" />
  <img src="/images/image_6_189.png" style="left:327.7200012207031px; top:204.36997985839844px; width:133.07998657226562px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_190.png" style="left:460.79998779296875px; top:204.36997985839844px; width:0.480010986328125px; height:1.9199981689453125px; position:absolute;" />
  <img src="/images/image_6_191.png" style="left:461.2799987792969px; top:204.36997985839844px; width:74.16000366210938px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_192.png" style="left:254.0399932861328px; top:206.28997802734375px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_193.png" style="left:327.239990234375px; top:206.28997802734375px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_194.png" style="left:460.79998779296875px; top:206.28997802734375px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:119.16000366210938px; top:218.82119750976562px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Construction date</span>
  <span style="left:221.62655639648438px; top:218.82119750976562px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[Year]</span>
  <span style="left:283.0799865722656px; top:219.30117797851562px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.general.constructionDate}</span>
  <span style="left:330.3599853515625px; top:218.82119750976562px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Design pressure</span>
  <span style="left:435.4642333984375px; top:218.82119750976562px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[mbar]</span>
  <span style="left:493.32000732421875px; top:219.30117797851562px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.operationalConditions.designPressure}</span>
  <img src="/images/image_6_195.png" style="left:116.27999877929688px; top:216.7300262451172px; width:137.75999450683594px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_196.png" style="left:254.0399932861328px; top:216.7300262451172px; width:0.4799957275390625px; height:1.9199981689453125px; position:absolute;" />
  <img src="/images/image_6_197.png" style="left:254.52000427246094px; top:216.7300262451172px; width:72.71998596191406px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_198.png" style="left:327.239990234375px; top:216.7300262451172px; width:0.480010986328125px; height:1.9199981689453125px; position:absolute;" />
  <img src="/images/image_6_199.png" style="left:327.7200012207031px; top:216.7300262451172px; width:133.07998657226562px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_200.png" style="left:460.79998779296875px; top:216.7300262451172px; width:0.480010986328125px; height:1.9199981689453125px; position:absolute;" />
  <img src="/images/image_6_201.png" style="left:461.2799987792969px; top:216.7300262451172px; width:74.16000366210938px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_202.png" style="left:254.0399932861328px; top:218.6500244140625px; width:0.4799957275390625px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_203.png" style="left:327.239990234375px; top:218.6500244140625px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_204.png" style="left:460.79998779296875px; top:218.6500244140625px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <span style="left:119.16000366210938px; top:231.30117797851562px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Manufacturer</span>
  <span style="left:260.760009765625px; top:231.30117797851562px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.general.manufacturer}</span>
  <span style="left:330.3599853515625px; top:231.30117797851562px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Design vacuum</span>
  <span style="left:435.4642639160156px; top:231.30117797851562px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[mbar]</span>
  <span style="left:492.1199951171875px; top:235.26119995117188px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.operationalConditions.designVacuum}</span>
  <img src="/images/image_6_205.png" style="left:116.27999877929688px; top:229.2100067138672px; width:137.75999450683594px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_206.png" style="left:254.0399932861328px; top:229.2100067138672px; width:0.4799957275390625px; height:1.9199981689453125px; position:absolute;" />
  <img src="/images/image_6_207.png" style="left:254.52000427246094px; top:229.2100067138672px; width:72.71998596191406px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_208.png" style="left:327.239990234375px; top:229.2100067138672px; width:0.480010986328125px; height:1.9199981689453125px; position:absolute;" />
  <img src="/images/image_6_209.png" style="left:327.7200012207031px; top:229.2100067138672px; width:133.07998657226562px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_210.png" style="left:460.79998779296875px; top:229.2100067138672px; width:0.480010986328125px; height:1.9199981689453125px; position:absolute;" />
  <img src="/images/image_6_211.png" style="left:461.2799987792969px; top:229.2100067138672px; width:74.16000366210938px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_212.png" style="left:254.0399932861328px; top:231.13002014160156px; width:0.4799957275390625px; height:17.520004272460938px; position:absolute;" />
  <img src="/images/image_6_213.png" style="left:327.239990234375px; top:231.13002014160156px; width:0.480010986328125px; height:17.520004272460938px; position:absolute;" />
  <img src="/images/image_6_214.png" style="left:460.79998779296875px; top:231.13002014160156px; width:0.480010986328125px; height:17.520004272460938px; position:absolute;" />
  <span style="left:119.16000366210938px; top:250.74118041992188px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Nameplate present?</span>
  <span style="left:218.74794006347656px; top:250.74118041992188px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[yes/no]</span>
  <span style="left:284.760009765625px; top:251.22122192382812px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.general.nameplatePresent ? "Yes" : "No" }</span>
  <span style="left:330.3599853515625px; top:250.74118041992188px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Product inflow rate</span>
  <span style="left:436.30499267578125px; top:250.74118041992188px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[m</span>
  <span style="left:444.1199951171875px; top:250.4022674560547px; font-size:4.550000190734863px; font-family:'Arial'; position:absolute;">3</span>
  <span style="left:446.6400146484375px; top:250.74118041992188px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">/h]</span>
  <span style="left:492.3599853515625px; top:251.22122192382812px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.operationalConditions.productInflowRate}</span>
  <img src="/images/image_6_215.png" style="left:116.27999877929688px; top:248.65000915527344px; width:137.75999450683594px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_216.png" style="left:254.0399932861328px; top:248.65000915527344px; width:0.4799957275390625px; height:1.9199981689453125px; position:absolute;" />
  <img src="/images/image_6_217.png" style="left:254.52000427246094px; top:248.65000915527344px; width:72.71998596191406px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_218.png" style="left:327.239990234375px; top:248.65000915527344px; width:0.480010986328125px; height:1.9199981689453125px; position:absolute;" />
  <img src="/images/image_6_219.png" style="left:327.7200012207031px; top:248.65000915527344px; width:133.07998657226562px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_220.png" style="left:460.79998779296875px; top:248.65000915527344px; width:0.480010986328125px; height:1.9199981689453125px; position:absolute;" />
  <img src="/images/image_6_221.png" style="left:461.2799987792969px; top:248.65000915527344px; width:74.16000366210938px; height:0.4799957275390625px; position:absolute;" />
  <img src="/images/image_6_222.png" style="left:254.0399932861328px; top:250.55999755859375px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_223.png" style="left:327.239990234375px; top:250.55999755859375px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_224.png" style="left:460.79998779296875px; top:250.55999755859375px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:119.16000366210938px; top:263.2212219238281px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">As built drawing available</span>
  <span style="left:218.74374389648438px; top:263.2212219238281px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[yes/no]</span>
  <span style="left:284.760009765625px; top:263.7012023925781px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.general.asBuiltDrawingAvailable ? "Yes" : "No"}</span>
  <span style="left:330.3599853515625px; top:263.2212219238281px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Product outflow rate</span>
  <span style="left:436.3056640625px; top:263.2212219238281px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[m</span>
  <span style="left:444.1199951171875px; top:262.88226318359375px; font-size:4.550000190734863px; font-family:'Arial'; position:absolute;">3</span>
  <span style="left:446.6400146484375px; top:263.2212219238281px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">/h]</span>
  <span style="left:492.3599853515625px; top:263.7012023925781px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.operationalConditions.productOutflowRate}</span>
  <img src="/images/image_6_225.png" style="left:116.27999877929688px; top:261.0099792480469px; width:137.75999450683594px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_226.png" style="left:254.0399932861328px; top:261.0099792480469px; width:0.4799957275390625px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_227.png" style="left:254.52000427246094px; top:261.0099792480469px; width:72.71998596191406px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_228.png" style="left:327.239990234375px; top:261.0099792480469px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_229.png" style="left:327.7200012207031px; top:261.0099792480469px; width:133.07998657226562px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_230.png" style="left:460.79998779296875px; top:261.0099792480469px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_231.png" style="left:461.2799987792969px; top:261.0099792480469px; width:74.16000366210938px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_232.png" style="left:254.0399932861328px; top:262.92999267578125px; width:0.4799957275390625px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_233.png" style="left:327.239990234375px; top:262.92999267578125px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_234.png" style="left:460.79998779296875px; top:262.92999267578125px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <span style="left:305.8800048828125px; top:275.4612121582031px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Dimensions</span>
  <span style="left:119.16000366210938px; top:287.9411926269531px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Diameter</span>
  <span style="left:226.0656280517578px; top:287.9411926269531px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[m]</span>
  <span style="left:283.0799865722656px; top:287.9411926269531px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.dimensions.diameter}</span>
  <span style="left:330.3599853515625px; top:287.9411926269531px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Foundation type</span>
  <span style="left:470.5199890136719px; top:287.9411926269531px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.dimensions.foundationType}</span>
  <img src="/images/image_6_235.png" style="left:254.0399932861328px; top:286.33001708984375px; width:0.4799957275390625px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_6_236.png" style="left:327.239990234375px; top:286.33001708984375px; width:0.480010986328125px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_6_237.png" style="left:460.79998779296875px; top:286.33001708984375px; width:0.480010986328125px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_6_238.png" style="left:254.0399932861328px; top:287.77001953125px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_239.png" style="left:327.239990234375px; top:287.77001953125px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_240.png" style="left:460.79998779296875px; top:287.77001953125px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:119.16000366210938px; top:300.4211730957031px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Height</span>
  <span style="left:226.06564331054688px; top:300.4211730957031px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[m]</span>
  <span style="left:283.0799865722656px; top:300.4211730957031px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.dimensions.height}</span>
  <span style="left:330.3599853515625px; top:300.4211730957031px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Foundation height</span>
  <span style="left:437.5054931640625px; top:300.4211730957031px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[mm]</span>
  <span style="left:493.20001220703125px; top:300.4211730957031px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.dimensions.foundationHeight}</span>
  <img src="/images/image_6_241.png" style="left:116.27999877929688px; top:298.2099914550781px; width:137.75999450683594px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_242.png" style="left:254.0399932861328px; top:298.2099914550781px; width:0.4799957275390625px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_243.png" style="left:254.52000427246094px; top:298.2099914550781px; width:72.71998596191406px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_244.png" style="left:327.239990234375px; top:298.2099914550781px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_245.png" style="left:327.7200012207031px; top:298.2099914550781px; width:133.07998657226562px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_246.png" style="left:460.79998779296875px; top:298.2099914550781px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_247.png" style="left:461.2799987792969px; top:298.2099914550781px; width:74.16000366210938px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_248.png" style="left:254.0399932861328px; top:300.1300048828125px; width:0.4799957275390625px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_249.png" style="left:327.239990234375px; top:300.1300048828125px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_250.png" style="left:460.79998779296875px; top:300.1300048828125px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <span style="left:119.16000366210938px; top:312.7812194824219px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Maximum filling height</span>
  <span style="left:226.065673828125px; top:312.7812194824219px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[m]</span>
  <span style="left:283.0799865722656px; top:312.7812194824219px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.dimensions.maximumFillingHeight}</span>
  <span style="left:330.3599853515625px; top:312.7812194824219px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Leak detection system</span>
  <span style="left:433.06573486328125px; top:312.7812194824219px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[yes/no]</span>
  <span style="left:493.0799865722656px; top:312.7812194824219px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.dimensions.leakDetectionSystem ? "Yes" : "No"}</span>
  <img src="/images/image_6_251.png" style="left:116.27999877929688px; top:310.6899719238281px; width:137.75999450683594px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_252.png" style="left:254.0399932861328px; top:310.6899719238281px; width:0.4799957275390625px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_253.png" style="left:254.52000427246094px; top:310.6899719238281px; width:72.71998596191406px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_254.png" style="left:327.239990234375px; top:310.6899719238281px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_255.png" style="left:327.7200012207031px; top:310.6899719238281px; width:133.07998657226562px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_256.png" style="left:460.79998779296875px; top:310.6899719238281px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_257.png" style="left:461.2799987792969px; top:310.6899719238281px; width:74.16000366210938px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_258.png" style="left:254.0399932861328px; top:312.6099853515625px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_259.png" style="left:327.239990234375px; top:312.6099853515625px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_260.png" style="left:460.79998779296875px; top:312.6099853515625px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:317.760009765625px; top:325.0212097167969px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Roof</span>
  <span style="left:119.16000366210938px; top:337.6212158203125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Roof Type</span>
  <span style="left:282.4800109863281px; top:337.6212158203125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.roof.roofType}</span>
  <span style="left:330.3599853515625px; top:337.6212158203125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Roof thickness close to shell</span>
  <span style="left:437.5034484863281px; top:337.6212158203125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[mm]</span>
  <span style="left:493.32000732421875px; top:337.6212158203125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.roof.roofThicknessCloseToShell}</span>
  <img src="/images/image_6_261.png" style="left:254.0399932861328px; top:335.8899841308594px; width:0.4799957275390625px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_6_262.png" style="left:327.239990234375px; top:335.8899841308594px; width:0.480010986328125px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_6_263.png" style="left:460.79998779296875px; top:335.8899841308594px; width:0.480010986328125px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_6_264.png" style="left:254.0399932861328px; top:337.33001708984375px; width:0.4799957275390625px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_265.png" style="left:327.239990234375px; top:337.33001708984375px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_266.png" style="left:460.79998779296875px; top:337.33001708984375px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <span style="left:119.16000366210938px; top:349.981201171875px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Construction</span>
  <span style="left:285.0px; top:349.981201171875px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.roof.construction}</span>
  <span style="left:330.3599853515625px; top:349.981201171875px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Average roof thickness</span>
  <span style="left:437.505615234375px; top:349.981201171875px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[mm]</span>
  <span style="left:493.32000732421875px; top:349.981201171875px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.roof.averageRoofThickness}</span>
  <img src="/images/image_6_267.png" style="left:116.27999877929688px; top:347.8899841308594px; width:137.75999450683594px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_268.png" style="left:254.0399932861328px; top:347.8899841308594px; width:0.4799957275390625px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_269.png" style="left:254.52000427246094px; top:347.8899841308594px; width:72.71998596191406px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_270.png" style="left:327.239990234375px; top:347.8899841308594px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_271.png" style="left:327.7200012207031px; top:347.8899841308594px; width:133.07998657226562px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_272.png" style="left:460.79998779296875px; top:347.8899841308594px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_273.png" style="left:461.2799987792969px; top:347.8899841308594px; width:74.16000366210938px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_274.png" style="left:254.0399932861328px; top:349.80999755859375px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_275.png" style="left:327.239990234375px; top:349.80999755859375px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_276.png" style="left:460.79998779296875px; top:349.80999755859375px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:119.16000366210938px; top:362.3412170410156px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Insulation</span>
  <span style="left:218.7471923828125px; top:362.3412170410156px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[yes/no]</span>
  <span style="left:286.32000732421875px; top:362.3412170410156px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.roof.insulation ? "Yes" : "No"}</span>
  <img src="/images/image_6_277.png" style="left:116.27999877929688px; top:360.25px; width:137.75999450683594px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_278.png" style="left:254.0399932861328px; top:360.25px; width:0.4799957275390625px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_279.png" style="left:254.52000427246094px; top:360.25px; width:72.71998596191406px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_280.png" style="left:327.239990234375px; top:360.25px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_281.png" style="left:327.7200012207031px; top:360.25px; width:133.07998657226562px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_282.png" style="left:460.79998779296875px; top:360.25px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_283.png" style="left:461.2799987792969px; top:360.25px; width:74.16000366210938px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_284.png" style="left:254.0399932861328px; top:362.16998291015625px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_285.png" style="left:327.239990234375px; top:362.16998291015625px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_286.png" style="left:460.79998779296875px; top:362.16998291015625px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:119.16000366210938px; top:374.8211975097656px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Internal coating</span>
  <span style="left:218.74717712402344px; top:374.8211975097656px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[yes/no]</span>
  <span style="left:286.32000732421875px; top:374.8211975097656px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.roof.internalCoating ? "Yes" : "No"}</span>
  <img src="/images/image_6_287.png" style="left:116.27999877929688px; top:372.6099853515625px; width:137.75999450683594px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_288.png" style="left:254.0399932861328px; top:372.6099853515625px; width:0.4799957275390625px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_289.png" style="left:254.52000427246094px; top:372.6099853515625px; width:72.71998596191406px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_290.png" style="left:327.239990234375px; top:372.6099853515625px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_291.png" style="left:327.7200012207031px; top:372.6099853515625px; width:133.07998657226562px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_292.png" style="left:460.79998779296875px; top:372.6099853515625px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_293.png" style="left:461.2799987792969px; top:372.6099853515625px; width:74.16000366210938px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_294.png" style="left:254.0399932861328px; top:374.5299987792969px; width:0.4799957275390625px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_295.png" style="left:327.239990234375px; top:374.5299987792969px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_296.png" style="left:460.79998779296875px; top:374.5299987792969px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <span style="left:119.16000366210938px; top:387.18121337890625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Roof slope</span>
  <span style="left:216.34600830078125px; top:387.18121337890625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[degrees]</span>
  <span style="left:285.9599914550781px; top:387.18121337890625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.roof.roofSlope}</span>
  <img src="/images/image_6_297.png" style="left:116.27999877929688px; top:385.0899963378906px; width:137.75999450683594px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_298.png" style="left:254.0399932861328px; top:385.0799865722656px; width:0.4799957275390625px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_299.png" style="left:254.52000427246094px; top:385.0899963378906px; width:72.71998596191406px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_300.png" style="left:327.239990234375px; top:385.0799865722656px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_301.png" style="left:327.7200012207031px; top:385.0899963378906px; width:133.07998657226562px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_302.png" style="left:460.79998779296875px; top:385.0799865722656px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_303.png" style="left:461.2799987792969px; top:385.0899963378906px; width:74.16000366210938px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_304.png" style="left:254.0399932861328px; top:387.010009765625px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_305.png" style="left:327.239990234375px; top:387.010009765625px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_306.png" style="left:460.79998779296875px; top:387.010009765625px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:119.16000366210938px; top:399.54119873046875px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Number of beams</span>
  <span style="left:227.86553955078125px; top:399.54119873046875px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[-]</span>
  <span style="left:286.9200134277344px; top:399.54119873046875px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.roof.numberOfBeams}</span>
  <img src="/images/image_6_307.png" style="left:116.27999877929688px; top:397.4499816894531px; width:137.75999450683594px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_308.png" style="left:254.0399932861328px; top:397.4499816894531px; width:0.4799957275390625px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_309.png" style="left:254.52000427246094px; top:397.4499816894531px; width:72.71998596191406px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_310.png" style="left:327.239990234375px; top:397.4499816894531px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_311.png" style="left:327.7200012207031px; top:397.4499816894531px; width:133.07998657226562px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_312.png" style="left:460.79998779296875px; top:397.4499816894531px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_313.png" style="left:461.2799987792969px; top:397.4499816894531px; width:74.16000366210938px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_314.png" style="left:254.0399932861328px; top:399.3699951171875px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_315.png" style="left:327.239990234375px; top:399.3699951171875px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_316.png" style="left:460.79998779296875px; top:399.3699951171875px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:318.0px; top:411.9012145996094px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Shell</span>
  <span style="left:119.16000366210938px; top:424.3811950683594px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Main Material</span>
  <span style="left:278.1600036621094px; top:424.8612060546875px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.shell.mainMaterial}</span>
  <span style="left:330.3599853515625px; top:424.3811950683594px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Shell course height / avg thick.</span>
  <span style="left:441.34326171875px; top:424.3811950683594px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">5</span>
  <span style="left:465.239990234375px; top:424.8612060546875px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.shell.shellCourse5}</span>
  <img src="/images/image_6_317.png" style="left:254.0399932861328px; top:422.7699890136719px; width:0.4799957275390625px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_6_318.png" style="left:327.239990234375px; top:422.7699890136719px; width:0.480010986328125px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_6_319.png" style="left:460.79998779296875px; top:422.7699890136719px; width:0.480010986328125px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_6_320.png" style="left:254.0399932861328px; top:424.2099914550781px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_321.png" style="left:327.239990234375px; top:424.2099914550781px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_322.png" style="left:460.79998779296875px; top:424.2099914550781px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:119.16000366210938px; top:436.7412109375px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Construction</span>
  <span style="left:284.6400146484375px; top:437.22119140625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.shell.construction}</span>
  <span style="left:330.3599853515625px; top:436.7412109375px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Shell course height / avg thick.</span>
  <span style="left:441.34326171875px; top:436.7412109375px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">4</span>
  <span style="left:465.239990234375px; top:437.22119140625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.shell.shellCourse4}</span>
  <img src="/images/image_6_323.png" style="left:116.27999877929688px; top:434.6499938964844px; width:137.75999450683594px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_324.png" style="left:254.0399932861328px; top:434.6499938964844px; width:0.4799957275390625px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_325.png" style="left:254.52000427246094px; top:434.6499938964844px; width:72.71998596191406px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_326.png" style="left:327.239990234375px; top:434.6499938964844px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_327.png" style="left:327.7200012207031px; top:434.6499938964844px; width:133.07998657226562px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_328.png" style="left:460.79998779296875px; top:434.6499938964844px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_329.png" style="left:461.2799987792969px; top:434.6499938964844px; width:74.16000366210938px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_330.png" style="left:254.0399932861328px; top:436.55999755859375px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_331.png" style="left:327.239990234375px; top:436.55999755859375px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_332.png" style="left:460.79998779296875px; top:436.55999755859375px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:119.16000366210938px; top:449.22119140625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Internally coated</span>
  <span style="left:218.7465057373047px; top:449.22119140625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[yes/no]</span>
  <span style="left:267.6000061035156px; top:449.22119140625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.shell.internallyCoated ? "Yes" : "NO"}</span>
  <span style="left:330.3599853515625px; top:449.22119140625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Shell course height / avg thick.</span>
  <span style="left:441.34326171875px; top:449.22119140625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">3</span>
  <span style="left:465.239990234375px; top:453.18121337890625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.shell.shellCourse3}</span>
  <img src="/images/image_6_333.png" style="left:116.27999877929688px; top:447.0099792480469px; width:137.75999450683594px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_334.png" style="left:254.0399932861328px; top:447.0099792480469px; width:0.4799957275390625px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_335.png" style="left:254.52000427246094px; top:447.0099792480469px; width:72.71998596191406px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_336.png" style="left:327.239990234375px; top:447.0099792480469px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_337.png" style="left:327.7200012207031px; top:447.0099792480469px; width:133.07998657226562px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_338.png" style="left:460.79998779296875px; top:447.0099792480469px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_339.png" style="left:461.2799987792969px; top:447.0099792480469px; width:74.16000366210938px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_340.png" style="left:254.0399932861328px; top:448.92999267578125px; width:0.4799957275390625px; height:17.6400146484375px; position:absolute;" />
  <img src="/images/image_6_341.png" style="left:327.239990234375px; top:448.92999267578125px; width:0.480010986328125px; height:17.6400146484375px; position:absolute;" />
  <img src="/images/image_6_342.png" style="left:460.79998779296875px; top:448.92999267578125px; width:0.480010986328125px; height:17.6400146484375px; position:absolute;" />
  <span style="left:119.16000366210938px; top:468.66119384765625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Wind stiffener installed</span>
  <span style="left:218.7458038330078px; top:468.66119384765625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[yes/no]</span>
  <span style="left:286.32000732421875px; top:469.1412048339844px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.shell.windStiffenerInstalled ? "Yes" : "No"}</span>
  <span style="left:330.3599853515625px; top:468.66119384765625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Shell course height / avg thick.</span>
  <span style="left:441.34326171875px; top:468.66119384765625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">2</span>
  <span style="left:465.239990234375px; top:469.1412048339844px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.shell.shellCourse2}</span>
  <img src="/images/image_6_343.png" style="left:116.27999877929688px; top:466.5699768066406px; width:137.75999450683594px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_344.png" style="left:254.0399932861328px; top:466.5699768066406px; width:0.4799957275390625px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_345.png" style="left:254.52000427246094px; top:466.5699768066406px; width:72.71998596191406px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_346.png" style="left:327.239990234375px; top:466.5699768066406px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_347.png" style="left:327.7200012207031px; top:466.5699768066406px; width:133.07998657226562px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_348.png" style="left:460.79998779296875px; top:466.5699768066406px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_349.png" style="left:461.2799987792969px; top:466.5699768066406px; width:74.16000366210938px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_350.png" style="left:254.0399932861328px; top:468.489990234375px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_351.png" style="left:327.239990234375px; top:468.489990234375px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_352.png" style="left:460.79998779296875px; top:468.489990234375px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:119.16000366210938px; top:481.0212097167969px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Top curb angle dimensions</span>
  <span style="left:223.1863555908203px; top:481.0212097167969px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[mm]</span>
  <span style="left:273.7200012207031px; top:481.5011901855469px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.shell.topCurbAngleDimensions}</span>
  <span style="left:330.3599853515625px; top:481.0212097167969px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Shell course height / avg thick.</span>
  <span style="left:441.34326171875px; top:481.0212097167969px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">1</span>
  <span style="left:465.239990234375px; top:481.5011901855469px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.shell.shellCourse1}</span>
  <img src="/images/image_6_353.png" style="left:116.27999877929688px; top:478.92999267578125px; width:137.75999450683594px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_354.png" style="left:254.0399932861328px; top:478.92999267578125px; width:0.4799957275390625px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_355.png" style="left:254.52000427246094px; top:478.92999267578125px; width:72.71998596191406px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_356.png" style="left:327.239990234375px; top:478.92999267578125px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_357.png" style="left:327.7200012207031px; top:478.92999267578125px; width:133.07998657226562px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_358.png" style="left:460.79998779296875px; top:478.92999267578125px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_359.png" style="left:461.2799987792969px; top:478.92999267578125px; width:74.16000366210938px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_360.png" style="left:254.0399932861328px; top:480.8500061035156px; width:0.4799957275390625px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_361.png" style="left:327.239990234375px; top:480.8500061035156px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_362.png" style="left:460.79998779296875px; top:480.8500061035156px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_363.png" style="left:116.27999877929688px; top:491.4100036621094px; width:137.75999450683594px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_364.png" style="left:254.0399932861328px; top:491.40997314453125px; width:0.4799957275390625px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_365.png" style="left:254.52000427246094px; top:491.4100036621094px; width:72.71998596191406px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_366.png" style="left:327.239990234375px; top:491.40997314453125px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_367.png" style="left:327.7200012207031px; top:491.4100036621094px; width:133.07998657226562px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_368.png" style="left:460.79998779296875px; top:491.40997314453125px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_369.png" style="left:461.2799987792969px; top:491.4100036621094px; width:74.16000366210938px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_370.png" style="left:254.0399932861328px; top:493.3299865722656px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_371.png" style="left:327.239990234375px; top:493.3299865722656px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_372.png" style="left:460.79998779296875px; top:493.3299865722656px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:119.16000366210938px; top:505.8612365722656px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Design wind load</span>
  <span style="left:223.4236297607422px; top:505.8612365722656px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[m/s]</span>
  <span style="left:286.9200134277344px; top:506.3412170410156px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.shell.designWindLoad}</span>
  <img src="/images/image_6_373.png" style="left:116.27999877929688px; top:503.7699890136719px; width:137.75999450683594px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_374.png" style="left:254.0399932861328px; top:503.7699890136719px; width:0.4799957275390625px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_375.png" style="left:254.52000427246094px; top:503.7699890136719px; width:72.71998596191406px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_376.png" style="left:327.239990234375px; top:503.7699890136719px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_377.png" style="left:327.7200012207031px; top:503.7699890136719px; width:133.07998657226562px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_378.png" style="left:460.79998779296875px; top:503.7699890136719px; width:0.480010986328125px; height:1.920013427734375px; position:absolute;" />
  <img src="/images/image_6_379.png" style="left:461.2799987792969px; top:503.7699890136719px; width:74.16000366210938px; height:0.480010986328125px; position:absolute;" />
  <img src="/images/image_6_380.png" style="left:254.0399932861328px; top:505.69000244140625px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_381.png" style="left:327.239990234375px; top:505.69000244140625px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_382.png" style="left:460.79998779296875px; top:505.69000244140625px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:119.16000366210938px; top:518.22119140625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Dike Correction</span>
  <span style="left:218.74581909179688px; top:518.22119140625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[yes/no]</span>
  <span style="left:286.32000732421875px; top:518.701171875px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.shell.dikeCorrection ? "Yes" : "No"}</span>
  <img src="/images/image_6_383.png" style="left:116.27999877929688px; top:516.1300048828125px; width:137.75999450683594px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_384.png" style="left:254.0399932861328px; top:516.1300048828125px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_385.png" style="left:254.52000427246094px; top:516.1300048828125px; width:72.71998596191406px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_386.png" style="left:327.239990234375px; top:516.1300048828125px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_387.png" style="left:327.7200012207031px; top:516.1300048828125px; width:133.07998657226562px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_388.png" style="left:460.79998779296875px; top:516.1300048828125px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_389.png" style="left:461.2799987792969px; top:516.1300048828125px; width:74.16000366210938px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_390.png" style="left:254.0399932861328px; top:518.0499877929688px; width:0.4799957275390625px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_391.png" style="left:327.239990234375px; top:518.0499877929688px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_392.png" style="left:460.79998779296875px; top:518.0499877929688px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <span style="left:119.16000366210938px; top:530.701171875px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Anchors</span>
  <span style="left:218.7464599609375px; top:530.701171875px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[yes/no]</span>
  <span style="left:286.32000732421875px; top:531.18115234375px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.shell.anchors ? "Yes" : "No"}</span>
  <img src="/images/image_6_393.png" style="left:116.27999877929688px; top:528.6099853515625px; width:137.75999450683594px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_394.png" style="left:254.0399932861328px; top:528.6100463867188px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_395.png" style="left:254.52000427246094px; top:528.6099853515625px; width:72.71998596191406px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_396.png" style="left:327.239990234375px; top:528.6100463867188px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_397.png" style="left:327.7200012207031px; top:528.6099853515625px; width:133.07998657226562px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_398.png" style="left:460.79998779296875px; top:528.6100463867188px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_399.png" style="left:461.2799987792969px; top:528.6099853515625px; width:74.16000366210938px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_400.png" style="left:254.0399932861328px; top:530.5299682617188px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_401.png" style="left:327.239990234375px; top:530.5299682617188px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_402.png" style="left:460.79998779296875px; top:530.5299682617188px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:314.0400085449219px; top:542.941162109375px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Bottom</span>
  <span style="left:119.16000366210938px; top:555.421142578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Installation date</span>
  <span style="left:284.0400085449219px; top:555.421142578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.bottom.installationDate}</span>
  <span style="left:330.3599853515625px; top:555.421142578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Internal Coating</span>
  <span style="left:433.6656799316406px; top:555.421142578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[yes/no]</span>
  <span style="left:493.0799865722656px; top:555.421142578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.bottom.internalCoating ? "Yes" : "No"}</span>
  <img src="/images/image_6_403.png" style="left:254.0399932861328px; top:553.8099975585938px; width:0.4799957275390625px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_6_404.png" style="left:327.239990234375px; top:553.8099975585938px; width:0.480010986328125px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_6_405.png" style="left:460.79998779296875px; top:553.8099975585938px; width:0.480010986328125px; height:1.44000244140625px; position:absolute;" />
  <img src="/images/image_6_406.png" style="left:254.0399932861328px; top:555.25px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_407.png" style="left:327.239990234375px; top:555.25px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_408.png" style="left:460.79998779296875px; top:555.25px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:119.16000366210938px; top:567.9011840820312px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Bottom plate thickness</span>
  <span style="left:223.18768310546875px; top:567.9011840820312px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[mm]</span>
  <span style="left:286.9200134277344px; top:567.9011840820312px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.bottom.bottomPlateThickness}</span>
  <span style="left:330.3599853515625px; top:567.9011840820312px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Corner weld thickness int.</span>
  <span style="left:438.1054992675781px; top:567.9011840820312px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[mm]</span>
  <span style="left:481.9200134277344px; top:567.9011840820312px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.bottom.cornerWeldThicknessInt}</span>
  <img src="/images/image_6_409.png" style="left:116.27999877929688px; top:565.6900634765625px; width:137.75999450683594px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_410.png" style="left:254.0399932861328px; top:565.6900024414062px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_411.png" style="left:254.52000427246094px; top:565.6900634765625px; width:72.71998596191406px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_412.png" style="left:327.239990234375px; top:565.6900024414062px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_413.png" style="left:327.7200012207031px; top:565.6900634765625px; width:133.07998657226562px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_414.png" style="left:460.79998779296875px; top:565.6900024414062px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_415.png" style="left:461.2799987792969px; top:565.6900634765625px; width:74.16000366210938px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_416.png" style="left:254.0399932861328px; top:567.6100463867188px; width:0.4799957275390625px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_417.png" style="left:327.239990234375px; top:567.6100463867188px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_418.png" style="left:460.79998779296875px; top:567.6100463867188px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <span style="left:119.16000366210938px; top:580.2611694335938px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Construction</span>
  <span style="left:284.0400085449219px; top:580.2611694335938px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.bottom.construction}</span>
  <span style="left:330.3599853515625px; top:580.2611694335938px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Corner weld thickness ext.</span>
  <span style="left:438.1061706542969px; top:580.2611694335938px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[mm]</span>
  <span style="left:481.9200134277344px; top:580.2611694335938px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.bottom.cornerWeldThicknessExt}</span>
  <img src="/images/image_6_419.png" style="left:116.27999877929688px; top:578.1700439453125px; width:137.75999450683594px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_420.png" style="left:254.0399932861328px; top:578.1699829101562px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_421.png" style="left:254.52000427246094px; top:578.1700439453125px; width:72.71998596191406px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_422.png" style="left:327.239990234375px; top:578.1699829101562px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_423.png" style="left:327.7200012207031px; top:578.1700439453125px; width:133.07998657226562px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_424.png" style="left:460.79998779296875px; top:578.1699829101562px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_425.png" style="left:461.2799987792969px; top:578.1700439453125px; width:74.16000366210938px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_426.png" style="left:254.0399932861328px; top:580.0900268554688px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_427.png" style="left:327.239990234375px; top:580.0900268554688px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_428.png" style="left:460.79998779296875px; top:580.0900268554688px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:119.16000366210938px; top:592.6211547851562px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Annular Ring</span>
  <span style="left:218.74649047851562px; top:592.6211547851562px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[yes/no]</span>
  <span style="left:284.760009765625px; top:592.6211547851562px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.bottom.annularRing ? "Yes" : "No"}</span>
  <img src="/images/image_6_429.png" style="left:116.27999877929688px; top:590.52001953125px; width:137.75999450683594px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_430.png" style="left:254.0399932861328px; top:590.530029296875px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_431.png" style="left:254.52000427246094px; top:590.52001953125px; width:72.71998596191406px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_432.png" style="left:327.239990234375px; top:590.530029296875px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_433.png" style="left:327.7200012207031px; top:590.52001953125px; width:208.92001342773438px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_434.png" style="left:254.0399932861328px; top:592.4500122070312px; width:0.4799957275390625px; height:10.44000244140625px; position:absolute;" />
  <img src="/images/image_6_435.png" style="left:327.239990234375px; top:592.4500122070312px; width:0.480010986328125px; height:10.44000244140625px; position:absolute;" />
  <span style="left:119.16000366210938px; top:605.1011962890625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Annular average thickness</span>
  <span style="left:223.18838500976562px; top:605.1011962890625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[mm]</span>
  <span style="left:284.0400085449219px; top:605.1011962890625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.bottom.annularAverageThickness}</span>
  <img src="/images/image_6_436.png" style="left:116.27999877929688px; top:602.8900146484375px; width:137.75999450683594px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_437.png" style="left:254.0399932861328px; top:602.8900146484375px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_438.png" style="left:254.52000427246094px; top:602.8900146484375px; width:72.71998596191406px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_439.png" style="left:327.239990234375px; top:602.8900146484375px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_440.png" style="left:327.7200012207031px; top:602.8900146484375px; width:208.68002319335938px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_441.png" style="left:254.0399932861328px; top:604.8099975585938px; width:0.4799957275390625px; height:10.55999755859375px; position:absolute;" />
  <img src="/images/image_6_442.png" style="left:327.239990234375px; top:604.8099975585938px; width:0.480010986328125px; height:10.55999755859375px; position:absolute;" />
  <span style="left:119.16000366210938px; top:617.461181640625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">Annular average width</span>
  <span style="left:223.18698120117188px; top:617.461181640625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">[mm]</span>
  <span style="left:285.9599914550781px; top:617.461181640625px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.bottom.annularAverageWidth}</span>
  <img src="/images/image_6_443.png" style="left:116.27999877929688px; top:615.3699951171875px; width:137.75999450683594px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_444.png" style="left:254.0399932861328px; top:615.3699951171875px; width:0.4799957275390625px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_445.png" style="left:254.52000427246094px; top:615.3699951171875px; width:72.71998596191406px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_446.png" style="left:327.239990234375px; top:615.3699951171875px; width:0.480010986328125px; height:1.91998291015625px; position:absolute;" />
  <img src="/images/image_6_447.png" style="left:327.7200012207031px; top:615.3699951171875px; width:208.68002319335938px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_448.png" style="left:115.55999755859375px; top:627.7300415039062px; width:92.16000366210938px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_449.png" style="left:207.0px; top:627.7300415039062px; width:47.040008544921875px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_450.png" style="left:254.0399932861328px; top:617.2900390625px; width:0.4799957275390625px; height:10.91998291015625px; position:absolute;" />
  <img src="/images/image_6_451.png" style="left:254.52000427246094px; top:627.7300415039062px; width:72.71998596191406px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_452.png" style="left:327.239990234375px; top:617.2900390625px; width:0.480010986328125px; height:10.91998291015625px; position:absolute;" />
  <img src="/images/image_6_453.png" style="left:327.7200012207031px; top:627.7300415039062px; width:110.760009765625px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_454.png" style="left:437.760009765625px; top:627.7300415039062px; width:33.720001220703125px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_6_455.png" style="left:470.760009765625px; top:627.7300415039062px; width:65.6400146484375px; height:0.47998046875px; position:absolute;" />
  <span style="left:116.27999877929688px; top:638.8949584960938px; font-size:9.0px; font-family:'Arial'; position:absolute;">Appendix 1 gives the estimated tank weight on basis of the provided information (±20% accuracy).</span>
  </div>
  <div class="page" id="page-7">
  <span style="left:116.27999877929688px; top:28.381193161010742px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Client:</span>
  <span style="left:137.9158477783203px; top:28.381193161010742px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> Vivo Energy / S.E.P.T.</span>
  <span style="left:116.27999877929688px; top:36.42116928100586px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Location:</span>
  <span style="left:147.63479614257812px; top:36.42116928100586px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> Skhira, Tunisia</span>
  <span style="left:116.27999877929688px; top:44.46120834350586px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Tank Number:</span>
  <span style="left:163.23007202148438px; top:44.46120834350586px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> ${data.general.tankIdentification}</span>
  <span style="left:116.27999877929688px; top:52.50118637084961px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Revision Date:</span>
  <span style="left:164.7898406982422px; top:52.50118637084961px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> September 27,2016</span>
  <span style="left:116.27999877929688px; top:60.66122055053711px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">ROSEN Project No.:</span>
  <span style="left:182.30809020996094px; top:60.66122055053711px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> 5-2160-10677</span>
  <span style="left:116.27999877929688px; top:68.70120239257812px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Revision No.:</span>
  <span style="left:160.83096313476562px; top:68.70120239257812px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> 0</span>
  <span style="left:59.52000045776367px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">This document is classified as confidential</span>
  <span style="left:466.2645263671875px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">ROSEN · page 7 of 21</span>
  <span style="left:56.7599983215332px; top:109.03617858886719px; font-size:15.960000038146973px; font-family:'Arial,Bold'; position:absolute;">4</span>
  <span style="left:116.27643585205078px; top:109.03617858886719px; font-size:15.960000038146973px; font-family:'Arial,Bold'; position:absolute;">TANK BOTTOM</span>
  <span style="left:56.7599983215332px; top:163.25999450683594px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">4.1</span>
  <span style="left:116.28001403808594px; top:163.25999450683594px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">General</span>
  <span style="left:116.27999877929688px; top:186.13502502441406px; font-size:9.0px; font-family:'Arial'; position:absolute;">The tank bottom assessment includes the assessment of the following items:</span>
  <span style="left:134.27999877929688px; top:201.76309204101562px; font-size:5.03000020980835px; font-family:'WingdingsOOEnc'; position:absolute;"></span>
  <span style="left:152.27999877929688px; top:198.13502502441406px; font-size:9.0px; font-family:'Arial'; position:absolute;">Minimum remaining thickness, corrosion assessment</span>
  <span style="left:134.27999877929688px; top:213.76309204101562px; font-size:5.03000020980835px; font-family:'WingdingsOOEnc'; position:absolute;"></span>
  <span style="left:152.27999877929688px; top:210.13502502441406px; font-size:9.0px; font-family:'Arial'; position:absolute;">Remaining Life Assessment</span>
  <span style="left:134.27999877929688px; top:225.76309204101562px; font-size:5.03000020980835px; font-family:'WingdingsOOEnc'; position:absolute;"></span>
  <span style="left:152.27999877929688px; top:222.13502502441406px; font-size:9.0px; font-family:'Arial'; position:absolute;">Annular dimensions</span>
  <span style="left:134.27999877929688px; top:237.76309204101562px; font-size:5.03000020980835px; font-family:'WingdingsOOEnc'; position:absolute;"></span>
  <span style="left:152.27999877929688px; top:234.13502502441406px; font-size:9.0px; font-family:'Arial'; position:absolute;">Bottom external projection</span>
  <span style="left:134.27999877929688px; top:249.76309204101562px; font-size:5.03000020980835px; font-family:'WingdingsOOEnc'; position:absolute;"></span>
  <span style="left:152.27999877929688px; top:246.13502502441406px; font-size:9.0px; font-family:'Arial'; position:absolute;">Bottom to shell weld</span>
  <span style="left:56.7599983215332px; top:292.3800048828125px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">4.2</span>
  <span style="left:116.28001403808594px; top:292.3800048828125px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">Minimum remaining thickness, corrosion assessment</span>
  <span style="left:116.27999877929688px; top:315.2550354003906px; font-size:9.0px; font-family:'Arial'; position:absolute;">Tank floors generally are formed by a several steel plates welded to each other, forming a thin</span>
  <span style="left:116.27999877929688px; top:325.69500732421875px; font-size:9.0px; font-family:'Arial'; position:absolute;">membrane. The loads from the tank shell and product are mainly carried by the tank foundation.</span>
  <span style="left:116.27999877929688px; top:336.0150146484375px; font-size:9.0px; font-family:'Arial'; position:absolute;">Therefore bottom inspection strategies are oriented to determine the integrity of the tank bottom by</span>
  <span style="left:116.27999877929688px; top:346.33502197265625px; font-size:9.0px; font-family:'Arial'; position:absolute;">preventing leakage of product.</span>
  <span style="left:116.27999877929688px; top:356.6549987792969px; font-size:9.0px; font-family:'Arial'; position:absolute;">To evaluate the minimum remaining thickness for tank bottom plates, from corrosion effects, the following</span>
  <span style="left:116.27999877929688px; top:367.0950012207031px; font-size:9.0px; font-family:'Arial'; position:absolute;">method is used (API 653, section 4.4.5.1):</span>
  <span style="left:116.27999877929688px; top:387.6150207519531px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;">MRT</span>
  <span style="left:151.6796875px; top:387.6150207519531px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;">=</span>
  <span style="left:187.19908142089844px; top:387.6150207519531px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;">(Minimum of RT</span>
  <span style="left:251.16000366210938px; top:390.80999755859375px; font-size:6.0px; font-family:'Arial,Italic'; position:absolute;">bc</span>
  <span style="left:257.52001953125px; top:387.6150207519531px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;"> or RT</span>
  <span style="left:282.6000061035156px; top:390.80999755859375px; font-size:6.0px; font-family:'Arial,Italic'; position:absolute;">ip</span>
  <span style="left:287.1600036621094px; top:387.6150207519531px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;">) - Or (CR</span>
  <span style="left:326.6400146484375px; top:390.80999755859375px; font-size:6.0px; font-family:'Arial,Italic'; position:absolute;">int</span>
  <span style="left:332.8680114746094px; top:387.6150207519531px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;"> + CR</span>
  <span style="left:355.32000732421875px; top:390.80999755859375px; font-size:6.0px; font-family:'Arial,Italic'; position:absolute;">ext</span>
  <span style="left:363.3599853515625px; top:387.6150207519531px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;">)</span>
  <span style="left:116.27999877929688px; top:408.4950256347656px; font-size:9.0px; font-family:'Arial'; position:absolute;">Where:</span>
  <span style="left:116.5199966430664px; top:418.69500732421875px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;">MRT</span>
  <span style="left:151.67999267578125px; top:418.69500732421875px; font-size:9.0px; font-family:'Arial'; position:absolute;">=</span>
  <span style="left:187.1993865966797px; top:418.69500732421875px; font-size:9.0px; font-family:'Arial'; position:absolute;">Minimum remaining thickness at the end of interval</span>
  <span style="left:389.9413146972656px; top:418.69500732421875px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;"> Or</span>
  <span style="left:402.4800109863281px; top:418.69500732421875px; font-size:9.0px; font-family:'Arial'; position:absolute;">. This value must meet the</span>
  <span style="left:187.1999969482422px; top:429.135009765625px; font-size:9.0px; font-family:'Arial'; position:absolute;">requirements of Table 6.1 and 4.4.5.4 and 4.4.6.</span>
  <span style="left:116.27999877929688px; top:439.33502197265625px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;">Or</span>
  <span style="left:151.67999267578125px; top:439.33502197265625px; font-size:9.0px; font-family:'Arial'; position:absolute;">=</span>
  <span style="left:187.1993865966797px; top:439.33502197265625px; font-size:9.0px; font-family:'Arial'; position:absolute;">In-service interval of operation (years to next internal inspection) not to exceed that</span>
  <span style="left:187.1999969482422px; top:449.89501953125px; font-size:9.0px; font-family:'Arial'; position:absolute;">allowed by 6.4.2.</span>
  <span style="left:116.27999877929688px; top:460.0950012207031px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;">RT</span>
  <span style="left:128.27999877929688px; top:463.2900085449219px; font-size:6.0px; font-family:'Arial,Italic'; position:absolute;">bc</span>
  <span style="left:151.67999267578125px; top:460.0950012207031px; font-size:9.0px; font-family:'Arial'; position:absolute;">=</span>
  <span style="left:187.1993865966797px; top:460.0950012207031px; font-size:9.0px; font-family:'Arial'; position:absolute;">Minimum remaining thickness from bottom side corrosion after repairs.</span>
  <span style="left:116.27999877929688px; top:470.4150085449219px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;">RT</span>
  <span style="left:128.27999877929688px; top:473.6100158691406px; font-size:6.0px; font-family:'Arial,Italic'; position:absolute;">ip</span>
  <span style="left:151.67999267578125px; top:470.4150085449219px; font-size:9.0px; font-family:'Arial'; position:absolute;">=</span>
  <span style="left:187.1993865966797px; top:470.4150085449219px; font-size:9.0px; font-family:'Arial'; position:absolute;">Minimum remaining thickness from internal corrosion after repairs.</span>
  <span style="left:116.27999877929688px; top:480.7350158691406px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;">CR</span>
  <span style="left:129.24000549316406px; top:483.92999267578125px; font-size:6.0px; font-family:'Arial,Italic'; position:absolute;">int</span>
  <span style="left:151.67999267578125px; top:480.7350158691406px; font-size:9.0px; font-family:'Arial'; position:absolute;">=</span>
  <span style="left:187.1993865966797px; top:480.7350158691406px; font-size:9.0px; font-family:'Arial'; position:absolute;">Maximum rate of corrosion not repaired on the top side</span>
  <span style="left:405.90643310546875px; top:480.7350158691406px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;"> CR</span>
  <span style="left:421.44000244140625px; top:483.92999267578125px; font-size:6.0px; font-family:'Arial,Italic'; position:absolute;">int</span>
  <span style="left:427.6679992675781px; top:480.7350158691406px; font-size:9.0px; font-family:'Arial'; position:absolute;"> = 0 for coated areas of the</span>
  <span style="left:187.1999969482422px; top:491.1750183105469px; font-size:9.0px; font-family:'Arial'; position:absolute;">bottom. The expected life of the coating must equal or exceed</span>
  <span style="left:433.3813171386719px; top:491.1750183105469px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;"> Or</span>
  <span style="left:445.9176025390625px; top:491.1750183105469px; font-size:9.0px; font-family:'Arial'; position:absolute;"> to use</span>
  <span style="left:473.0027770996094px; top:491.1750183105469px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;"> CR</span>
  <span style="left:488.5199890136719px; top:494.3699951171875px; font-size:6.0px; font-family:'Arial,Italic'; position:absolute;">int</span>
  <span style="left:494.74798583984375px; top:491.1750183105469px; font-size:9.0px; font-family:'Arial'; position:absolute;"> = 0.</span>
  <span style="left:116.27999877929688px; top:501.4950256347656px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;">CR</span>
  <span style="left:129.24000549316406px; top:504.69000244140625px; font-size:6.0px; font-family:'Arial,Italic'; position:absolute;">ext</span>
  <span style="left:151.67999267578125px; top:501.4950256347656px; font-size:9.0px; font-family:'Arial'; position:absolute;">=</span>
  <span style="left:187.1993865966797px; top:501.4950256347656px; font-size:9.0px; font-family:'Arial'; position:absolute;">Maximum rate of corrosion on the bottom side. To calculate the corrosion rate, use the</span>
  <span style="left:187.1999969482422px; top:511.9349670410156px; font-size:9.0px; font-family:'Arial'; position:absolute;">minimum remaining thickness after repairs. Assume a linear rate based on the age of</span>
  <span style="left:187.1999969482422px; top:522.135009765625px; font-size:9.0px; font-family:'Arial'; position:absolute;">the tanks.</span>
  <span style="left:226.29869079589844px; top:522.135009765625px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;"> CR</span>
  <span style="left:241.8000030517578px; top:525.3300170898438px; font-size:6.0px; font-family:'Arial,Italic'; position:absolute;">ext</span>
  <span style="left:249.7080078125px; top:522.135009765625px; font-size:9.0px; font-family:'Arial'; position:absolute;"> = 0 for areas that have effective cathodic protection.</span>
  <span style="left:116.27999877929688px; top:542.8128051757812px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">Note 1:</span>
  <span style="left:151.64170837402344px; top:542.8128051757812px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">For areas of a bottom that have been scanned by the magnetic flux leakage (or exclusion) process, and do</span>
  <span style="left:116.27999877929688px; top:551.932861328125px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">not have effective cathodic protection, the thickness used for calculating</span>
  <span style="left:370.43609619140625px; top:551.932861328125px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;"> CR</span>
  <span style="left:384.4800109863281px; top:555.60791015625px; font-size:5.03000020980835px; font-family:'Arial,Italic'; position:absolute;">ext</span>
  <span style="left:391.1488037109375px; top:551.932861328125px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;"> must be the lesser of the</span>
  <span style="left:481.0132141113281px; top:551.932861328125px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;"> MFL</span>
  <span style="left:499.3313293457031px; top:551.932861328125px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;"> threshold</span>
  <span style="left:116.27999877929688px; top:561.1728515625px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">or the minimum thickness of corrosion areas that are not repaired. The</span>
  <span style="left:365.4029235839844px; top:561.1728515625px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;"> MFL</span>
  <span style="left:384.0113525390625px; top:561.1728515625px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;"> threshold is defined as the minimum</span>
  <span style="left:116.27999877929688px; top:570.412841796875px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">remaining thickness to be detected in the areas inspected. This value should be predetermined by the tank owner</span>
  <span style="left:116.27999877929688px; top:579.5328369140625px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">based on the desired inspection interval.</span>
  <span style="left:116.27999877929688px; top:588.7728271484375px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">Note 2: Corrosion of the bottom plates includes loss of metal from isolated or general corrosion</span>
  <span style="left:116.27999877929688px; top:607.3349609375px; font-size:9.0px; font-family:'Arial'; position:absolute;">The corrosion rates, internal and external, are calculated as per API 653 by assuming a linear rate based</span>
  <span style="left:116.27999877929688px; top:617.7749633789062px; font-size:9.0px; font-family:'Arial'; position:absolute;">on the age of the tank and considering a minimum remaining thickness after repairs. This is shown in the</span>
  <span style="left:116.27999877929688px; top:628.094970703125px; font-size:9.0px; font-family:'Arial'; position:absolute;">following equation:</span>
<span style="left:338.6400146484375px; top:654.25927734375px; font-size:9.81px; font-family:'TimesNewRoman,Italic'; position:absolute;">t</span>

<span style="left:342.3599853515625px; top:639.1392822265625px; font-size:9.81px; font-family:'TimesNewRoman,Italic'; position:absolute;">RT</span>

<span style="left:318.9758605957031px; top:639.1392822265625px; font-size:9.81px; font-family:'TimesNewRoman,Italic'; position:absolute;">T</span>

<span style="left:295.55999755859375px; top:646.4592895507812px; font-size:9.81px; font-family:'TimesNewRoman,Italic'; position:absolute;">CR</span>

<span style="left:323.760009765625px; top:645.2946166992188px; font-size:5.73px; font-family:'TimesNewRoman,Italic'; position:absolute;">org</span>

<span style="left:332.6400146484375px; top:653.1409301757812px; font-size:9.81px; font-family:'SymbolOOEnc'; position:absolute;">Δ</span>

<span style="left:334.79998779296875px; top:638.0209350585938px; font-size:9.81px; font-family:'SymbolOOEnc'; position:absolute;">-</span>

<span style="left:310.79998779296875px; top:645.3409423828125px; font-size:9.81px; font-family:'SymbolOOEnc'; position:absolute;">=</span>

<!-- Ligne de division -->
<div style="
  position:absolute;
  left:320px;     /* point de départ de la ligne : ajuste pour couvrir Torg - RT */
  top:652px;      /* position verticale : ajuste pour être entre la partie haute et basse */
  width:40px;     /* longueur de la ligne : ajuste pour couvrir toute la fraction */
  height:1px;     /* épaisseur de la ligne */
  background:black;
"></div>
  <span style="left:116.27999877929688px; top:665.4149780273438px; font-size:9.0px; font-family:'Arial'; position:absolute;">Where</span>
  <span style="left:116.27999877929688px; top:675.7349853515625px; font-size:9.0px; font-family:'Arial'; position:absolute;">T</span>
  <span style="left:121.68000030517578px; top:678.9299926757812px; font-size:6.0px; font-family:'Arial'; position:absolute;">org</span>
  <span style="left:151.67999267578125px; top:675.7349853515625px; font-size:9.0px; font-family:'Arial'; position:absolute;">=</span>
  <span style="left:187.1993865966797px; top:675.7349853515625px; font-size:9.0px; font-family:'Arial'; position:absolute;">Original thickness (or nominal thickness) [mm].</span>
  <span style="left:116.27999877929688px; top:685.7550048828125px; font-size:9.0px; font-family:'SymbolOOEnc'; position:absolute;">Δ</span>
  <span style="left:121.80000305175781px; top:686.6549682617188px; font-size:9.0px; font-family:'Arial'; position:absolute;">t</span>
  <span style="left:151.6800079345703px; top:686.6549682617188px; font-size:9.0px; font-family:'Arial'; position:absolute;">=</span>
  <span style="left:187.19940185546875px; top:686.6549682617188px; font-size:9.0px; font-family:'Arial'; position:absolute;">Time passed between previous inspection and current (latest) inspection [years].</span>
  <span style="left:116.27999877929688px; top:707.5349731445312px; font-size:9.0px; font-family:'Arial'; position:absolute;">The repair threshold (i.e. RT for each individual pit) may then be expressed as function of O</span>
  <span style="left:480.4800109863281px; top:710.7300415039062px; font-size:6.0px; font-family:'Arial'; position:absolute;">r</span>
  <span style="left:482.4779968261719px; top:707.5349731445312px; font-size:9.0px; font-family:'Arial'; position:absolute;"> in the</span>
  <span style="left:116.27999877929688px; top:717.85498046875px; font-size:9.0px; font-family:'Arial'; position:absolute;">following way:</span>
  <span style="left:353.5199890136719px; top:743.6962890625px; font-size:9.75px; font-family:'Arial'; position:absolute;">)</span>
  <span style="left:319.228271484375px; top:743.6962890625px; font-size:9.75px; font-family:'Arial'; position:absolute;">(</span>
  <span style="left:349.32000732421875px; top:728.3363037109375px; font-size:9.75px; font-family:'Arial'; position:absolute;">.</span>
  <span style="left:316.94610595703125px; top:728.3363037109375px; font-size:9.75px; font-family:'Arial'; position:absolute;">.</span>
<span style="left:349.20001220703125px; top:749.7705078125px; font-size:5.69px; font-family:'Arial,Italic'; position:absolute;">r</span>

<span style="left:326.3999938964844px; top:734.530517578125px; font-size:5.69px; font-family:'Arial,Italic'; position:absolute;">r</span>

<span style="left:307.44488525390625px; top:734.530517578125px; font-size:5.69px; font-family:'Arial,Italic'; position:absolute;">org</span>

<span style="left:341.3999938964844px; top:743.6962890625px; font-size:9.75px; font-family:'Arial,Italic'; position:absolute;">O</span>

<span style="left:328.810791015625px; top:743.6962890625px; font-size:9.75px; font-family:'Arial,Italic'; position:absolute;">t</span>

<span style="left:351.4800109863281px; top:728.3363037109375px; font-size:9.75px; font-family:'Arial,Italic'; position:absolute;">MRT</span>

<span style="left:346.3251953125px; top:728.3363037109375px; font-size:9.75px; font-family:'Arial,Italic'; position:absolute;">t</span>

<span style="left:318.6274108886719px; top:728.3363037109375px; font-size:9.75px; font-family:'Arial,Italic'; position:absolute;">O</span>

<span style="left:301.36212158203125px; top:728.3363037109375px; font-size:9.75px; font-family:'Arial,Italic'; position:absolute;">T</span>

<span style="left:276.3599853515625px; top:736.0162353515625px; font-size:9.75px; font-family:'Arial,Italic'; position:absolute;">RT</span>

<span style="left:334.44000244140625px; top:742.7212524414062px; font-size:9.75px; font-family:'SymbolOOEnc'; position:absolute;">+</span>

<span style="left:322.9200134277344px; top:742.7212524414062px; font-size:9.75px; font-family:'SymbolOOEnc'; position:absolute;">Δ</span>

<span style="left:340.32000732421875px; top:727.3612670898438px; font-size:9.75px; font-family:'SymbolOOEnc'; position:absolute;">Δ</span>

<span style="left:332.760009765625px; top:727.3612670898438px; font-size:9.75px; font-family:'SymbolOOEnc'; position:absolute;">+</span>

<span style="left:293.3999938964844px; top:735.0411987304688px; font-size:9.75px; font-family:'SymbolOOEnc'; position:absolute;">=</span>

<!-- Ligne de division pour fraction -->
<div style="
  position:absolute;
  left:300px;    /* début de la ligne (ajuste pour couvrir tout le numérateur) */
  top:742px;     /* position verticale entre numérateur et dénominateur */
  width:80px;    /* longueur de la ligne (ajuste selon la longueur de la fraction) */
  height:1px;    /* épaisseur */
  background:black;
"></div>
  <span style="left:116.27999877929688px; top:757.4549560546875px; font-size:9.0px; font-family:'Arial'; position:absolute;">The convert remaining plate thickness to metal loss and vice versa the following formula is used:</span>
  </div>
  <div class="page" id="page-8">
  <span style="left:116.27999877929688px; top:28.381193161010742px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Client:</span>
  <span style="left:137.9158477783203px; top:28.381193161010742px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> Vivo Energy / S.E.P.T.</span>
  <span style="left:116.27999877929688px; top:36.42116928100586px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Location:</span>
  <span style="left:147.63479614257812px; top:36.42116928100586px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> Skhira, Tunisia</span>
  <span style="left:116.27999877929688px; top:44.46120834350586px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Tank Number:</span>
  <span style="left:163.23007202148438px; top:44.46120834350586px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> ${data.general.tankIdentification}</span>
  <span style="left:116.27999877929688px; top:52.50118637084961px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Revision Date:</span>
  <span style="left:164.7898406982422px; top:52.50118637084961px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> September 27,2016</span>
  <span style="left:116.27999877929688px; top:60.66122055053711px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">ROSEN Project No.:</span>
  <span style="left:182.30809020996094px; top:60.66122055053711px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> 5-2160-10677</span>
  <span style="left:116.27999877929688px; top:68.70120239257812px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Revision No.:</span>
  <span style="left:160.83096313476562px; top:68.70120239257812px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> 0</span>
  <span style="left:59.52000045776367px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">This document is classified as confidential</span>
  <span style="left:466.2645263671875px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">ROSEN · page 8 of 21</span>
<!-- Numérateur : RT -->
<span style="left:327.3599853515625px; top:112.1586685180664px; font-size:9.46px; font-family:'Arial,Italic'; position:absolute;">RT</span>

<!-- Dénominateur : Torg -->
<span style="left:326.0400085449219px; top:125.59867095947266px; font-size:9.46px; font-family:'Arial,Italic'; position:absolute;">T</span>
<span style="left:332.1600036621094px; top:131.5734405517578px; font-size:5.51px; font-family:'Arial,Italic'; position:absolute;">org</span>

<!-- Ligne de fraction entre RT et Torg -->
<div style="
  position:absolute;
  left:326px;   /* alignée sur RT et Torg */
  top:121px;    /* entre RT et Torg */
  width:20px;   /* longueur de la ligne */
  height:1px;
  background:black;
"></div>

<!-- 1 -->
<span style="left:312.74749755859375px; top:118.1586685180664px; font-size:9.46px; font-family:'Arial'; position:absolute;">1</span>

<!-- Symbole moins -->
<span style="left:318.8399963378906px; top:117.2126693725586px; font-size:9.46px; font-family:'SymbolOOEnc'; position:absolute;">-</span>

<!-- Parenthèse gauche -->
<span style="left:308px; top:113px; font-size:12px; font-family:'Arial'; position:absolute;">(</span>

<!-- Parenthèse droite -->
<span style="left:348px; top:113px; font-size:12px; font-family:'Arial'; position:absolute;">)</span>

<!-- Pour le reste du calcul -->
<span style="left:300.8399963378906px; top:117.2126693725586px; font-size:9.46px; font-family:'SymbolOOEnc'; position:absolute;">=</span>

<!-- Valeurs fixes et pourcentage -->
<span style="left:289.719970703125px; top:118.1586685180664px; font-size:9.46px; font-family:'Arial'; position:absolute;">%</span>
<span style="left:350.0494689941406px; top:118.1586685180664px; font-size:9.46px; font-family:'Arial'; position:absolute;">.</span>
<span style="left:352.8089294433594px; top:118.1586685180664px; font-size:9.46px; font-family:'Arial'; position:absolute;">100</span>
<span style="left:369.239990234375px; top:118.1586685180664px; font-size:9.46px; font-family:'Arial'; position:absolute;">%</span>



<!-- Valeur ML -->
<span style="left:276.3599853515625px; top:118.1586685180664px; font-size:9.46px; font-family:'Arial,Italic'; position:absolute;">ML</span>

<!-- Résultat -->
<span style="left:56.7599983215332px; top:176.3400115966797px; font-size:12px; font-family:'Arial,Bold'; position:absolute;">4.3</span>
  <span style="left:116.28001403808594px; top:176.3400115966797px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">Remaining Life Assessment</span>
  <span style="left:116.27999877929688px; top:199.21498107910156px; font-size:9.0px; font-family:'Arial'; position:absolute;">The remaining life of the tank (or better tank component) shall be calculated from the following formula :</span>
  <span style="left:116.27999877929688px; top:220.6950225830078px; font-size:9.0px; font-family:'Arial'; position:absolute;">Remaining life:</span>
  <span style="left:313.20001220703125px; top:228.10023498535156px; font-size:11.470000267028809px; font-family:'TimesNewRoman,Italic'; position:absolute;">CR</span>
  <span style="left:323.0400085449219px; top:210.10023498535156px; font-size:11.470000267028809px; font-family:'TimesNewRoman,Italic'; position:absolute;">t</span>
  <span style="left:288.37994384765625px; top:210.10023498535156px; font-size:11.470000267028809px; font-family:'TimesNewRoman,Italic'; position:absolute;">t</span>
  <span style="left:244.55999755859375px; top:219.10023498535156px; font-size:11.470000267028809px; font-family:'TimesNewRoman,Italic'; position:absolute;">years</span>
  <span style="left:224.77081298828125px; top:219.10023498535156px; font-size:11.470000267028809px; font-family:'TimesNewRoman,Italic'; position:absolute;">RL</span>
  <span style="left:327.239990234375px; top:217.23922729492188px; font-size:6.690000057220459px; font-family:'TimesNewRoman,Italic'; position:absolute;">required</span>
  <span style="left:292.48614501953125px; top:217.23922729492188px; font-size:6.690000057220459px; font-family:'TimesNewRoman,Italic'; position:absolute;">actual</span>
  <span style="left:285.3242492675781px; top:212.79266357421875px; font-size:11.470000267028809px; font-family:'SymbolOOEnc'; position:absolute;">_____________ </span>
  <span style="left:314.3999938964844px; top:208.79266357421875px; font-size:11.470000267028809px; font-family:'SymbolOOEnc'; position:absolute;">-</span>
  <span style="left:277.9200134277344px; top:217.79266357421875px; font-size:11.470000267028809px; font-family:'SymbolOOEnc'; position:absolute;">=</span>
  <span style="left:270.8399963378906px; top:219.10023498535156px; font-size:11.470000267028809px; font-family:'TimesNewRoman'; position:absolute;">)</span>
  <span style="left:239.05892944335938px; top:219.10023498535156px; font-size:11.470000267028809px; font-family:'TimesNewRoman'; position:absolute;">(</span>
  <span style="left:116.27999877929688px; top:240.892822265625px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">Where:</span>
  <span style="left:116.27999877929688px; top:250.13287353515625px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">t</span>
  <span style="left:118.55999755859375px; top:253.80783081054688px; font-size:5.03000020980835px; font-family:'Arial,Italic'; position:absolute;">actual</span>
  <span style="left:151.67999267578125px; top:250.13287353515625px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">=</span>
  <span style="left:187.1597442626953px; top:250.13287353515625px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">The actual thickness, in inches (or mm), measured at the time of inspection for a given location or</span>
  <span style="left:116.27999877929688px; top:259.37286376953125px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">component.</span>
  <span style="left:116.27999877929688px; top:268.49285888671875px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">t</span>
  <span style="left:118.55999755859375px; top:272.1678161621094px; font-size:5.03000020980835px; font-family:'Arial,Italic'; position:absolute;">required</span>
  <span style="left:151.67999267578125px; top:268.49285888671875px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">=</span>
  <span style="left:187.1597442626953px; top:268.49285888671875px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">The required thickness, in inches (or mm), at the same location or component as the t</span>
  <span style="left:490.20001220703125px; top:272.1678161621094px; font-size:5.03000020980835px; font-family:'Arial,Italic'; position:absolute;">actual</span>
  <span style="left:116.27999877929688px; top:277.73284912109375px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">measurement, computed by the design formulas (e.g. pressure and structural) before corrosion allowance and</span>
  <span style="left:116.27999877929688px; top:286.97283935546875px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">manufacturer’s tolerance are added.</span>
  <span style="left:116.27999877929688px; top:296.09283447265625px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">CR</span>
  <span style="left:151.64089965820312px; top:296.09283447265625px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">=</span>
  <span style="left:187.1206512451172px; top:296.09283447265625px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">Corrosion rate in inches/year (or mm/year).</span>
  <span style="left:116.27999877929688px; top:315.8550109863281px; font-size:9.0px; font-family:'Arial'; position:absolute;">The long-term (LT) corrosion rate shall be calculated from the following formula:</span>
  <span style="left:116.27999877929688px; top:337.93499755859375px; font-size:9.0px; font-family:'Arial'; position:absolute;">Corrosion Rate:</span>
<!-- Subscripts -->
<span style="left:428.0400085449219px; top:352.158447265625px; font-size:7.05px; font-family:'TimesNewRoman,Italic'; position:absolute;">actual</span>

<span style="left:382.9763488769531px; top:352.158447265625px; font-size:7.05px; font-family:'TimesNewRoman,Italic'; position:absolute;">initial</span>

<span style="left:372.7200012207031px; top:334.6384582519531px; font-size:7.05px; font-family:'TimesNewRoman,Italic'; position:absolute;">actual</span>

<span style="left:338.68255615234375px; top:334.6384582519531px; font-size:7.05px; font-family:'TimesNewRoman,Italic'; position:absolute;">initial</span>

<!-- Numérateur -->
<span style="left:368.5199890136719px; top:327.1478271484375px; font-size:12.09px; font-family:'TimesNewRoman,Italic'; position:absolute;">t</span>

<span style="left:359.8800048828125px; top:325.7695617675781px; font-size:12.09px; font-family:'SymbolOOEnc'; position:absolute;">-</span>

<span style="left:334.821533203125px; top:327.1478271484375px; font-size:12.09px; font-family:'TimesNewRoman,Italic'; position:absolute;">t</span>

<!-- Dénominateur -->
<span style="left:279.5675964355469px; top:344.6678161621094px; font-size:12.09px; font-family:'TimesNewRoman,Italic'; position:absolute;">time</span>

<span style="left:307.15216064453125px; top:344.6678161621094px; font-size:12.09px; font-family:'TimesNewRoman,Italic'; position:absolute;">years</span>

<span style="left:338.5740966796875px; top:344.6678161621094px; font-size:12.09px; font-family:'TimesNewRoman,Italic'; position:absolute;">between</span>

<span style="left:379.1082458496094px; top:344.6678161621094px; font-size:12.09px; font-family:'TimesNewRoman,Italic'; position:absolute;">t</span>

<span style="left:403.4538269042969px; top:344.6678161621094px; font-size:12.09px; font-family:'TimesNewRoman,Italic'; position:absolute;">and</span>

<span style="left:423.8399963378906px; top:344.6678161621094px; font-size:12.09px; font-family:'TimesNewRoman,Italic'; position:absolute;">t</span>

<!-- Parenthèses -->
<span style="left:301.58111572265625px; top:344.6678161621094px; font-size:12.09px; font-family:'TimesNewRoman'; position:absolute;">(</span>

<span style="left:333.239990234375px; top:344.6678161621094px; font-size:12.09px; font-family:'TimesNewRoman'; position:absolute;">)</span>

<span style="left:242.29318237304688px; top:335.18780517578125px; font-size:12.09px; font-family:'TimesNewRoman'; position:absolute;">(</span>

<span style="left:261.9599914550781px; top:335.18780517578125px; font-size:12.09px; font-family:'TimesNewRoman'; position:absolute;">)</span>

<!-- Autres éléments -->
<span style="left:246.9600067138672px; top:335.18780517578125px; font-size:12.09px; font-family:'TimesNewRoman,Italic'; position:absolute;">LT</span>

<span style="left:226.5738525390625px; top:335.18780517578125px; font-size:12.09px; font-family:'TimesNewRoman,Italic'; position:absolute;">CR</span>

<span style="left:269.0400085449219px; top:333.8095397949219px; font-size:12.09px; font-family:'SymbolOOEnc'; position:absolute;">=</span>

<!-- Ligne de division -->
<div style="
  position:absolute;
  left:300px;   /* point de départ de la ligne pour couvrir t initial - t actual */
  top:345px;    /* position verticale entre numérateur et dénominateur */
  width:120px;   /* longueur de la ligne */
  height:1px;   /* épaisseur */
  background:black;
"></div>
  <span style="left:116.27999877929688px; top:371.7750244140625px; font-size:9.0px; font-family:'Arial'; position:absolute;">The short-term (ST) corrosion rate shall be calculated from the following formula:</span>
  <span style="left:116.27999877929688px; top:394.57501220703125px; font-size:9.0px; font-family:'Arial'; position:absolute;">Corrosion Rate:</span>
<!-- Subscripts -->
<span style="left:432.239990234375px; top:408.8964538574219px; font-size:6.94px; font-family:'TimesNewRoman,Italic'; position:absolute;">actual</span>

<span style="left:380.3190612792969px; top:408.8964538574219px; font-size:6.94px; font-family:'TimesNewRoman,Italic'; position:absolute;">previous</span>

<span style="left:377.0400085449219px; top:390.2964782714844px; font-size:6.94px; font-family:'TimesNewRoman,Italic'; position:absolute;">actual</span>

<span style="left:336.1509094238281px; top:390.2964782714844px; font-size:6.94px; font-family:'TimesNewRoman,Italic'; position:absolute;">previous</span>

<!-- Numérateur -->
<span style="left:372.8399963378906px; top:382.8681945800781px; font-size:11.91px; font-family:'TimesNewRoman,Italic'; position:absolute;">t</span>

<span style="left:364.32000732421875px; top:381.5104675292969px; font-size:11.91px; font-family:'SymbolOOEnc'; position:absolute;">-</span>

<span style="left:331.0811462402344px; top:382.8681945800781px; font-size:11.91px; font-family:'TimesNewRoman,Italic'; position:absolute;">t</span>

<!-- Dénominateur -->
<span style="left:275.88128662109375px; top:401.4681701660156px; font-size:11.91px; font-family:'TimesNewRoman,Italic'; position:absolute;">time</span>

<span style="left:303.3612365722656px; top:401.4681701660156px; font-size:11.91px; font-family:'TimesNewRoman,Italic'; position:absolute;">years</span>

<span style="left:334.9204406738281px; top:401.4681701660156px; font-size:11.91px; font-family:'TimesNewRoman,Italic'; position:absolute;">between</span>

<span style="left:375.2393798828125px; top:401.4681701660156px; font-size:11.91px; font-family:'TimesNewRoman,Italic'; position:absolute;">t</span>

<span style="left:407.64056396484375px; top:401.4681701660156px; font-size:11.91px; font-family:'TimesNewRoman,Italic'; position:absolute;">and</span>

<span style="left:428.0400085449219px; top:401.4681701660156px; font-size:11.91px; font-family:'TimesNewRoman,Italic'; position:absolute;">t</span>

<!-- Parenthèses -->
<span style="left:297.9606018066406px; top:401.4681701660156px; font-size:11.91px; font-family:'TimesNewRoman'; position:absolute;">(</span>

<span style="left:329.6400146484375px; top:401.4681701660156px; font-size:11.91px; font-family:'TimesNewRoman'; position:absolute;">)</span>

<span style="left:239.7610626220703px; top:392.2281799316406px; font-size:11.91px; font-family:'TimesNewRoman'; position:absolute;">(</span>

<span style="left:258.4800109863281px; top:392.2281799316406px; font-size:11.91px; font-family:'TimesNewRoman'; position:absolute;">)</span>

<!-- Autres éléments -->
<span style="left:244.1999969482422px; top:392.2281799316406px; font-size:11.91px; font-family:'TimesNewRoman,Italic'; position:absolute;">ST</span>

<span style="left:224.03993225097656px; top:392.2281799316406px; font-size:11.91px; font-family:'TimesNewRoman,Italic'; position:absolute;">CR</span>

<span style="left:265.55999755859375px; top:390.8704528808594px; font-size:11.91px; font-family:'SymbolOOEnc'; position:absolute;">=</span>

<!-- Ligne de division -->
<div style="
  position:absolute;
  left:275px;   /* point de départ de la ligne */
  top:400px;    /* position verticale entre numérateur et dénominateur */
  width:150px;   /* longueur de la ligne */
  height:1px;   /* épaisseur */
  background:black;
"></div>
  <span style="left:116.27999877929688px; top:429.0528564453125px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">Where:</span>
  <span style="left:116.27999877929688px; top:438.2928466796875px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">t</span>
  <span style="left:118.51233673095703px; top:441.0078430175781px; font-size:5.03000020980835px; font-family:'Arial,Italic'; position:absolute;"> initial</span>
  <span style="left:151.67999267578125px; top:438.2928466796875px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">=</span>
  <span style="left:187.1597442626953px; top:438.2928466796875px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">The thickness, in inches (or mm), at the same location as t</span>
  <span style="left:394.0799865722656px; top:441.96783447265625px; font-size:5.03000020980835px; font-family:'Arial,Italic'; position:absolute;">actual</span>
  <span style="left:407.29583740234375px; top:438.2928466796875px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;"> measured at initial installation or at</span>
  <span style="left:116.27999877929688px; top:447.412841796875px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">the commencement of a new corrosion rate environment.</span>
  <span style="left:116.27999877929688px; top:456.6528625488281px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">t</span>
  <span style="left:118.55999755859375px; top:460.3278503417969px; font-size:5.03000020980835px; font-family:'Arial,Italic'; position:absolute;">previous</span>
  <span style="left:151.67999267578125px; top:456.6528625488281px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">=</span>
  <span style="left:187.1597442626953px; top:456.6528625488281px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">The thickness, in inches (or mm), at the same location as t</span>
  <span style="left:394.0799865722656px; top:460.3278503417969px; font-size:5.03000020980835px; font-family:'Arial,Italic'; position:absolute;">actual</span>
  <span style="left:407.29583740234375px; top:456.6528625488281px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;"> measured during a previous</span>
  <span style="left:116.27999877929688px; top:465.8928527832031px; font-size:8.029999732971191px; font-family:'Arial,Italic'; position:absolute;">inspection.</span>
  <span style="left:116.27999877929688px; top:485.6549987792969px; font-size:9.0px; font-family:'Arial'; position:absolute;">Long-term and short-term corrosion rates should be compared as part of the data assessment. The</span>
  <span style="left:116.27999877929688px; top:495.9750061035156px; font-size:9.0px; font-family:'Arial'; position:absolute;">reliability engineer and his team of specialists shall select the corrosion rate that best reflects the current</span>
  <span style="left:116.27999877929688px; top:506.2950134277344px; font-size:9.0px; font-family:'Arial'; position:absolute;">process.</span>
  <span style="left:116.27999877929688px; top:527.0549926757812px; font-size:9.0px; font-family:'Arial'; position:absolute;">As often there is no knowledge of the original thickness of the tank bottom, the long term corrosion</span>
  <span style="left:116.27999877929688px; top:537.375px; font-size:9.0px; font-family:'Arial'; position:absolute;">cannot be calculated. Therefore, Rosen uses the long-term corrosion rate within the remaining life</span>
  <span style="left:116.27999877929688px; top:547.6949462890625px; font-size:9.0px; font-family:'Arial'; position:absolute;">assessment based on the (latest) measurement data by using the following approach:</span>
  <span style="left:116.27999877929688px; top:568.3349609375px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;">The ten (10) deepest features will be used for calculating the average (AVG) corrosion rate and the</span>
  <span style="left:116.27999877929688px; top:578.6549682617188px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;">standard deviation (STDEV). Re-averaging all features which are within AVG±STDEV will give the</span>
  <span style="left:116.27999877929688px; top:588.9749755859375px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;">corrosion rate to be used for the remaining life assessment. This approach will be applicable for internal</span>
  <span style="left:116.27999877929688px; top:599.2949829101562px; font-size:9.0px; font-family:'Arial,Italic'; position:absolute;">bottom plates, internal annular (if applicable), external bottom plates and external annular (if applicable).</span>
  <span style="left:116.27999877929688px; top:620.1749877929688px; font-size:9.0px; font-family:'Arial'; position:absolute;">While the API 653 methodology defines for each individual pit an individual corrosion rate, Rosen</span>
  <span style="left:116.27999877929688px; top:630.4949951171875px; font-size:9.0px; font-family:'Arial'; position:absolute;">approach defines one (1) corrosion rate for all pits since the mechanism of corrosion is considered to be</span>
  <span style="left:116.27999877929688px; top:640.8150024414062px; font-size:9.0px; font-family:'Arial'; position:absolute;">a stable mechanism within its environment and its operational window.</span>
  <span style="left:56.7599983215332px; top:687.0599975585938px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">4.4</span>
  <span style="left:116.28001403808594px; top:687.0599975585938px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">Annular dimensions</span>
  <span style="left:116.27999877929688px; top:709.9349975585938px; font-size:9.0px; font-family:'Arial'; position:absolute;">Tank bottoms provided with an annular ring shall comply with the design criteria stated in ${data.general.designStandards} section</span>
  <span style="left:116.27999877929688px; top:720.375px; font-size:9.0px; font-family:'Arial'; position:absolute;">5.5.2. The width of the annular should provide at least 600 mm between the inside of the shell and any</span>
  <span style="left:116.27999877929688px; top:730.6949462890625px; font-size:9.0px; font-family:'Arial'; position:absolute;">lap-welded joint. Additionally, a greater width might be required from the following equation:</span>
  </div>
  <div class="page" id="page-9">
  <span style="left:116.27999877929688px; top:28.381193161010742px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Client:</span>
  <span style="left:137.9158477783203px; top:28.381193161010742px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> Vivo Energy / S.E.P.T.</span>
  <span style="left:116.27999877929688px; top:36.42116928100586px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Location:</span>
  <span style="left:147.63479614257812px; top:36.42116928100586px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> Skhira, Tunisia</span>
  <span style="left:116.27999877929688px; top:44.46120834350586px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Tank Number:</span>
  <span style="left:163.23007202148438px; top:44.46120834350586px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> ${data.general.tankIdentification}</span>
  <span style="left:116.27999877929688px; top:52.50118637084961px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Revision Date:</span>
  <span style="left:164.7898406982422px; top:52.50118637084961px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> September 27,2016</span>
  <span style="left:116.27999877929688px; top:60.66122055053711px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">ROSEN Project No.:</span>
  <span style="left:182.30809020996094px; top:60.66122055053711px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> 5-2160-10677</span>
  <span style="left:116.27999877929688px; top:68.70120239257812px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Revision No.:</span>
  <span style="left:160.83096313476562px; top:68.70120239257812px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> 0</span>
  <span style="left:59.52000045776367px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">This document is classified as confidential</span>
  <span style="left:466.2645263671875px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">ROSEN · page 9 of 21</span>
<!-- Exposants a -->
<span style="left:176.0399932861328px; top:123.6391830444336px; font-size:6.69px; font-family:'TimesNewRoman,Italic'; position:absolute;">a</span>
<span style="left:121.75532531738281px; top:123.6391830444336px; font-size:6.69px; font-family:'TimesNewRoman,Italic'; position:absolute;">la</span>

<!-- Numérateur : 215 -->
<span style="left:145.55999755859375px; top:109.30024719238281px; font-size:11.47px; font-family:'TimesNewRoman'; position:absolute;">215</span>

<!-- Symbole supérieur : > -->
<span style="left:130.0800018310547px; top:115.19261932373047px; font-size:11.47px; font-family:'SymbolOOEnc'; position:absolute;">&gt;</span>

<!-- Racine : √ + HG -->
<span style="left:140.72000122070312px; top:125.50019836425781px; font-size:11.47px; font-family:'TimesNewRoman,Italic'; position:absolute;">√</span>
<span style="left:149.27999877929688px; top:126.70021057128906px; font-size:11.47px; font-family:'TimesNewRoman,Italic'; position:absolute;">HG</span>
<span style="left:170.39999389648438px; top:116.50019836425781px; font-size:11.47px; font-family:'TimesNewRoman,Italic'; position:absolute;">e</span>

<!-- Ligne de fraction -->
<div style="
  position:absolute;
  left:145px;   /* début de la ligne */
  top:123px;    /* entre 215 et racine HG */
  width:20px;   /* longueur adaptée au √HG */
  height:1px;   /* épaisseur */
  background:black;
"></div>
  <span style="left:116.27999877929688px; top:150.85499572753906px; font-size:9.0px; font-family:'Arial'; position:absolute;">Where:</span>
  <span style="left:116.27999877929688px; top:171.49501037597656px; font-size:9.0px; font-family:'Arial'; position:absolute;">l</span>
  <span style="left:118.31999969482422px; top:174.69000244140625px; font-size:6.0px; font-family:'Arial'; position:absolute;">a</span>
  <span style="left:151.67999267578125px; top:171.49501037597656px; font-size:9.0px; font-family:'Arial'; position:absolute;">=</span>
  <span style="left:187.1993865966797px; top:171.49501037597656px; font-size:9.0px; font-family:'Arial'; position:absolute;">Annular width [mm].</span>
  <span style="left:116.27999877929688px; top:181.8150177001953px; font-size:9.0px; font-family:'Arial'; position:absolute;">H</span>
  <span style="left:151.67970275878906px; top:181.8150177001953px; font-size:9.0px; font-family:'Arial'; position:absolute;">=</span>
  <span style="left:187.1990966796875px; top:181.8150177001953px; font-size:9.0px; font-family:'Arial'; position:absolute;">Maximum design liquid height [m].</span>
  <span style="left:116.27999877929688px; top:192.25502014160156px; font-size:9.0px; font-family:'Arial'; position:absolute;">e</span>
  <span style="left:121.31999969482422px; top:195.45001220703125px; font-size:6.0px; font-family:'Arial'; position:absolute;">a</span>
  <span style="left:151.67999267578125px; top:192.25502014160156px; font-size:9.0px; font-family:'Arial'; position:absolute;">=</span>
  <span style="left:187.1993865966797px; top:192.25502014160156px; font-size:9.0px; font-family:'Arial'; position:absolute;">Thickness of the annular plate [mm].</span>
  <span style="left:116.27999877929688px; top:202.57496643066406px; font-size:9.0px; font-family:'Arial'; position:absolute;">G</span>
  <span style="left:151.67970275878906px; top:202.57496643066406px; font-size:9.0px; font-family:'Arial'; position:absolute;">=</span>
  <span style="left:187.1990966796875px; top:202.57496643066406px; font-size:9.0px; font-family:'Arial'; position:absolute;">Design specific gravity of the liquid to be stored</span>
  <span style="left:116.27999877929688px; top:223.21498107910156px; font-size:9.0px; font-family:'Arial'; position:absolute;">The annular thickness, for tanks in service with a product specific gravity less than 1.0, which require</span>
  <span style="left:116.27999877929688px; top:233.6549835205078px; font-size:9.0px; font-family:'Arial'; position:absolute;">annular plates for other than seismic loading considerations, shall be equal or greater than the thickness</span>
  <span style="left:116.27999877929688px; top:243.97499084472656px; font-size:9.0px; font-family:'Arial'; position:absolute;">given in API 653 table 4.5. For tanks in service with a product specific gravity of 1.0 or greater, which</span>
  <span style="left:116.27999877929688px; top:254.2949981689453px; font-size:9.0px; font-family:'Arial'; position:absolute;">require annular plates for other than seismic loading considerations, the thickness of the annular plates ,</span>
  <span style="left:116.27999877929688px; top:264.6150207519531px; font-size:9.0px; font-family:'Arial'; position:absolute;">shall be equal or greater than the thickness given in ${data.general.designStandards}, Table 5-1a or 5-1b.</span>
  <span style="left:56.7599983215332px; top:310.98004150390625px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">4.5</span>
  <span style="left:116.28001403808594px; top:310.98004150390625px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">Bottom external projection</span>
  <span style="left:116.27999877929688px; top:333.8550109863281px; font-size:9.0px; font-family:'Arial'; position:absolute;">The dimensions of the bottom plates or annular plates beyond the shell are also restricted as per API 653</span>
  <span style="left:116.27999877929688px; top:344.1750183105469px; font-size:9.0px; font-family:'Arial'; position:absolute;">section 4.4.5.7. The minimum thickness and width of the bottom plate projection beyond the shell,</span>
  <span style="left:116.27999877929688px; top:354.4950256347656px; font-size:9.0px; font-family:'Arial'; position:absolute;">measured at the toe of the outside bottom-to-shell fillet weld shall not be less than 0.1 in, i.e. 2.54 mm</span>
  <span style="left:116.27999877929688px; top:364.81500244140625px; font-size:9.0px; font-family:'Arial'; position:absolute;">and 3/8 in, i.e. 9.545 mm, respectively.</span>
  <span style="left:56.7599983215332px; top:411.1800231933594px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">4.6</span>
  <span style="left:116.28001403808594px; top:411.1800231933594px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">Bottom to shell weld</span>
  <span style="left:116.27999877929688px; top:434.0550231933594px; font-size:9.0px; font-family:'Arial'; position:absolute;">The attachment between the bottom edge of the lowest shell course and the bottom plate or annular</span>
  <span style="left:116.27999877929688px; top:444.375px; font-size:9.0px; font-family:'Arial'; position:absolute;">plate shall be a continuous fillet weld laid on each side of the shell plate. Therefore the bottom to shell</span>
  <span style="left:116.27999877929688px; top:454.69500732421875px; font-size:9.0px; font-family:'Arial'; position:absolute;">welds are measured internally (product side) as well as externally (beyond the shell).</span>
  <span style="left:116.27999877929688px; top:465.0150146484375px; font-size:9.0px; font-family:'Arial'; position:absolute;">The dimensions of the bottom-to-shell- weld depend on the thickness of the annular plates or of the</span>
  <span style="left:116.27999877929688px; top:475.45501708984375px; font-size:9.0px; font-family:'Arial'; position:absolute;">bottom plates under the shell and on the thickness of the lowest shell course. The specific criteria can be</span>
  <span style="left:116.27999877929688px; top:485.7750244140625px; font-size:9.0px; font-family:'Arial'; position:absolute;">found in ${data.general.designStandards} section 5.1.2.7.</span>
  <span style="left:56.7599983215332px; top:532.02001953125px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">4.7</span>
  <span style="left:116.28001403808594px; top:532.02001953125px; font-size:12.0px; font-family:'Arial,Bold'; position:absolute;">Conclusions</span>
  <span style="left:116.27999877929688px; top:554.89501953125px; font-size:9.0px; font-family:'Arial'; position:absolute;">See Appendix A2 for calculation details.</span>
  <span style="left:116.27999877929688px; top:575.2949829101562px; font-size:9.0px; font-family:'Arial'; position:absolute;">In total,</span>
  <span style="left:145.89810180664062px; top:575.2949829101562px; font-size:9.0px; font-family:'Arial,Bold'; position:absolute;"> 0</span>
  <span style="left:153.44400024414062px; top:575.2949829101562px; font-size:9.0px; font-family:'Arial'; position:absolute;"> metal loss indications have been recorded exceeding the reporting threshold of 20%t.</span>
  <span style="left:119.16000366210938px; top:597.412841796875px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">Metal loss depth</span>
  <span style="left:193.9199981689453px; top:597.412841796875px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">Total</span>
  <span style="left:243.47999572753906px; top:597.412841796875px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">Inspection side</span>
  <span style="left:324.4800109863281px; top:597.412841796875px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">Non inspection side</span>
  <span style="left:119.16000366210938px; top:609.8098754882812px; font-size:8.029999732971191px; font-family:'SymbolOOEnc'; position:absolute;"></span>
  <span style="left:125.87999725341797px; top:610.6128540039062px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">80 %</span>
  <span style="left:193.9199981689453px; top:610.0128784179688px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">0</span>
  <span style="left:243.42413330078125px; top:610.0128784179688px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">0</span>
  <span style="left:324.3327941894531px; top:610.0128784179688px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">0</span>
  <span style="left:119.16000366210938px; top:623.0928344726562px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">60 – 79 %</span>
  <span style="left:193.83578491210938px; top:623.0928344726562px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">0</span>
  <span style="left:243.33993530273438px; top:623.0928344726562px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">0</span>
  <span style="left:324.24859619140625px; top:623.0928344726562px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">0</span>
  <img src="/images/image_9_456.png" style="left:116.27999877929688px; top:621.1300048828125px; width:297.6000061035156px; height:0.47998046875px; position:absolute;" />
  <span style="left:119.16000366210938px; top:635.5728149414062px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">40 – 59 %</span>
  <span style="left:193.83578491210938px; top:635.5728149414062px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">0</span>
  <span style="left:243.33993530273438px; top:635.5728149414062px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">0</span>
  <span style="left:324.24859619140625px; top:635.5728149414062px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">0</span>
  <img src="/images/image_9_457.png" style="left:116.27999877929688px; top:633.6099853515625px; width:297.6000061035156px; height:0.47998046875px; position:absolute;" />
  <span style="left:119.16000366210938px; top:648.0528564453125px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">20 – 39 %</span>
  <span style="left:193.83578491210938px; top:648.0528564453125px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">0</span>
  <span style="left:243.33993530273438px; top:648.0528564453125px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">0</span>
  <span style="left:324.24859619140625px; top:648.0528564453125px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">0</span>
  <img src="/images/image_9_458.png" style="left:116.27999877929688px; top:646.0900268554688px; width:297.6000061035156px; height:0.47998046875px; position:absolute;" />
  <span style="left:119.16000366210938px; top:660.412841796875px; font-size:8.029999732971191px; font-family:'Arial,Bold'; position:absolute;">Total</span>
  <span style="left:193.9199981689453px; top:660.5328369140625px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">0</span>
  <span style="left:243.47999572753906px; top:660.5328369140625px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">0</span>
  <span style="left:324.4800109863281px; top:660.5328369140625px; font-size:8.029999732971191px; font-family:'Arial'; position:absolute;">0</span>
  <img src="/images/image_9_459.png" style="left:116.27999877929688px; top:658.6900024414062px; width:297.6000061035156px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_9_460.png" style="left:115.55999755859375px; top:671.1700439453125px; width:75.60000610351562px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_9_461.png" style="left:190.44000244140625px; top:671.1700439453125px; width:50.160003662109375px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_9_462.png" style="left:239.8800048828125px; top:671.1700439453125px; width:81.72000122070312px; height:0.47998046875px; position:absolute;" />
  <img src="/images/image_9_463.png" style="left:320.8800048828125px; top:671.1700439453125px; width:93.0px; height:0.47998046875px; position:absolute;" />
  <span style="left:134.27999877929688px; top:687.5230102539062px; font-size:5.03000020980835px; font-family:'WingdingsOOEnc'; position:absolute;"></span>
  <span style="left:152.27999877929688px; top:683.8949584960938px; font-size:9.0px; font-family:'Arial'; position:absolute;">The tank bottom was during the inspection in compliance with API653. To ensure safe</span>
  <span style="left:152.27999877929688px; top:695.8949584960938px; font-size:9.0px; font-family:'Arial'; position:absolute;">operations for a period of maximum 10 years, no action required.</span>
  <span style="left:134.27999877929688px; top:711.5230102539062px; font-size:5.03000020980835px; font-family:'WingdingsOOEnc'; position:absolute;"></span>
  <span style="left:152.27999877929688px; top:707.8949584960938px; font-size:9.0px; font-family:'Arial'; position:absolute;">The tank bottom external projection is in compliance with the API 653.</span>
  </div>
  <div class="page" id="page-10">
  <span style="left:116.27999877929688px; top:28.381193161010742px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Client:</span>
  <span style="left:137.9158477783203px; top:28.381193161010742px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> Vivo Energy / S.E.P.T.</span>
  <span style="left:116.27999877929688px; top:36.42116928100586px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Location:</span>
  <span style="left:147.63479614257812px; top:36.42116928100586px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> Skhira, Tunisia</span>
  <span style="left:116.27999877929688px; top:44.46120834350586px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Tank Number:</span>
  <span style="left:163.23007202148438px; top:44.46120834350586px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">${data.general.tankIdentification}</span>
  <span style="left:116.27999877929688px; top:52.50118637084961px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Revision Date:</span>
  <span style="left:164.7898406982422px; top:52.50118637084961px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> September 27,2016</span>
  <span style="left:116.27999877929688px; top:60.66122055053711px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">ROSEN Project No.:</span>
  <span style="left:182.30809020996094px; top:60.66122055053711px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> 5-2160-10677</span>
  <span style="left:116.27999877929688px; top:68.70120239257812px; font-size:6.960000038146973px; font-family:'Arial,Bold'; position:absolute;">Revision No.:</span>
  <span style="left:160.83096313476562px; top:68.70120239257812px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;"> 0</span>
  <span style="left:59.52000045776367px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">This document is classified as confidential</span>
  <span style="left:462.4246826171875px; top:797.5811767578125px; font-size:6.960000038146973px; font-family:'Arial'; position:absolute;">ROSEN · page 10 of 21</span>
  <span style="left:134.27999877929688px; top:114.28305053710938px; font-size:5.03000020980835px; font-family:'WingdingsOOEnc'; position:absolute;"></span>
  <span style="left:152.27999877929688px; top:110.65499114990234px; font-size:9.0px; font-family:'Arial'; position:absolute;">The annular width does not meet the design specifications required by the ${data.general.designStandards}. However no</span>
  <span style="left:152.27999877929688px; top:122.65499114990234px; font-size:9.0px; font-family:'Arial'; position:absolute;">annular ring is required for tank ${data.general.tankIdentification}, no action required.</span>
  <span style="left:134.27999877929688px; top:138.28305053710938px; font-size:5.03000020980835px; font-family:'WingdingsOOEnc'; position:absolute;"></span>
  <span style="left:152.27999877929688px; top:134.6549835205078px; font-size:9.0px; font-family:'Arial'; position:absolute;">The corner weld dimensions satisfy the requirements of the ${data.general.designStandards}.</span>
  <span style="left:116.27999877929688px; top:156.97499084472656px; font-size:9.0px; font-family:'Arial'; position:absolute;">The above is only valid if no change in the operational window is to be expected or a stepwise change in</span>
  <span style="left:116.27999877929688px; top:167.2949981689453px; font-size:9.0px; font-family:'Arial'; position:absolute;">the corrosion phenomena. Also be aware that patch plating will not remove the cause for external</span>
  <span style="left:116.27999877929688px; top:177.61500549316406px; font-size:9.0px; font-family:'Arial'; position:absolute;">corrosion.</span>
  </div>
  

    <style>
    body { background: #fff; margin: 0; padding: 0;font-size:40px }
    .page { position: relative; width: 595px; height: 842px;  transform: scale(1.16);margin: 131px auto;margin-bottom:10px; border: 1px solid #ccc; box-shadow: 0 0 10px #eee; }
    span { display: block; white-space: pre; }
    img { display: block; }
      .container {
    position: relative;
    width: 600px;
    height: 120px;
    font-family: Arial, sans-serif;
    font-size: 8.5px; /* 1.5 fois plus grand */
    line-height: 1.6;
  }
  .line {
    position: absolute;
    display: flex;
    align-items: center;
  }
  .label {
    font-weight: bold;
    white-space: nowrap;
  }
  .value {
    margin-left: 10px;
  }
  .line1 { top: 28.4px; left: 116.3px; }
  .line1 .value { margin-left: 17.6px; }
  .line2 { top: 44.1px; left: 116.3px; }
  .line2 .value { margin-left: 16.3px; }
  .line3 { top: 59.9px; left: 116.3px; }
  .line3 .value { margin-left: 17.9px; }
  .line4 { top: 75.6px; left: 116.3px; }
  .line4 .value { margin-left: 17.5px; }
  .line5 { top: 91.4px; left: 116.3px; }
  .line5 .value { margin-left: 17.0px; }
  .line6 { top: 107.2px; left: 116.3px; }
  .line6 .value { margin-left: 17.5px; }
    </style>
  `
}

function getConditionStyle(condition: string): string {
  switch (condition) {
    case "excellent":
      return "background: #dcfce7; color: #166534; border: 1px solid #bbf7d0;"
    case "good":
      return "background: #dbeafe; color: #1e40af; border: 1px solid #bfdbfe;"
    case "fair":
      return "background: #fef3c7; color: #92400e; border: 1px solid #fde68a;"
    case "poor":
      return "background: #fee2e2; color: #dc2626; border: 1px solid #fecaca;"
    default:
      return "background: #f3f4f6; color: #374151; border: 1px solid #d1d5db;"
  }
}

function getConditionText(condition: string): string {
  switch (condition) {
    case "excellent":
      return "EXCELLENT"
    case "good":
      return "BON"
    case "fair":
      return "CORRECT"
    case "poor":
      return "MAUVAIS"
    default:
      return "NON ÉVALUÉ"
  }
}
