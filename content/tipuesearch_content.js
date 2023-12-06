var tipuesearch = {"pages": [{'title': 'About', 'text': 'Pyslvs-UI Official site:  https://github.com/KmolYuan/Pyslvs-UI \n Pyslvs Official site:  https://github.com/KmolYuan/pyslvs \n Metaheuristics Official site:  https://github.com/KmolYuan/metaheuristics \n', 'tags': '', 'url': 'About.html'}, {'title': 'Pyslvs-UI', 'text': 'Old data:  https://pyslvs.github.io/old \n Pyslvs-UI  的開發源自 2008 年, 從最基本的實數基因演算法在平面機構的應用研究起步, 期間歷經下列研究者的貢獻: \n \n 李孟恭, 2015,  Django 網際框架在平面四連桿尺寸合成系統上的應用 \n 李玠廷, 2013,  網際程式框架在平面連桿機構尺寸合成系統上的應用 \n 陳威任, 2013, 符號式平面滑塊機構應用研究 \n 謝政良, 2012,  網際雙自由度凸輪機構尺寸合成系統 \n 黃竣鉉, 2012,  網際符號輔助軸接連桿機構之基因演算法尺寸合成系統 \n 謝智翔, 2012,  網際史都華平台機構逆運動學分析與模擬 \n 許哲菘, 2010,  網際六軸機械臂系統的逆運動學分析與模擬 \n 葉岱錦, 2009,  基因演算法在網際機構合成系統上的應用 \n \n 過程中, 於 2015 年由 李孟恭 整合上述論文所開發的三種演算法, 完成  Cython  格式的  RGA 、 DE  與  Firefly  演算法程式庫後. 並自 2016 年起由 張元 將上述尺寸合成演算法, 搭配利用\xa0  SWIG  技術, 將原本只能用於 Python2 的  Python-Solvespace  倉儲, 改寫為能結合 PyQt 圖形介面使用的  Python-Solvespace  程式庫作為另一項開端. 再搭配平面機構中的數目合成與類型合成等程式庫後, 成為目前的\xa0 Pyslvs-UI  平面機構模擬與合成套件. \n Pyslvs 開發紀要 \n 2015 年 4 月 - 由 李孟恭 以\xa0 Cython  技術, 完成三個 尺寸合成演算法 程式庫. \n 2016 年 7 月 - 由 張元 完成 Python 3 格式的  Python-Solvespace  程式庫. \n 2016 年 12 月- 由 張元 結合 PyQt5 與演算程式庫, 完成第一代  Pyslvs-UI  套件. \n 2017 年 11 月 -  https://pyslvs.github.io  上線. \n 2018 年 1 月 - 推出  18.01.0  版, 自此改為以年月序作為版次. \n 2018 年 7 月 -\xa0 https://pyslvs.github.io/old  使用手冊上線. \n 2019 年 6 月 - Pyslvs-UI 正式 發表  ( EN ),  Thesis . \n 2023 年 12 月 -  https://pyslvs.github.io  資料重新整理中. \n', 'tags': '', 'url': 'Pyslvs-UI.html'}, {'title': 'Development', 'text': 'Pyslvs_portable_development.7z  (需要下載密碼) \n 啟動 Pyslvs portable development 可攜系統後, cd tmp 然後取下 Pyslvs-UI 原始碼: \n git clone --recurse-submodules  https://github.com/pyslvs/Pyslvs-UI.git \n cd Pyslvs-UI \n pip install -e . \n 編譯完成後, 輸入 pyslvs 即可執行 Pyslvs-UI. \n \n', 'tags': '', 'url': 'Development.html'}, {'title': 'Pyinstaller', 'text': 'Under Pyslvs portable development environment, use the following batch file to generate standalone Pyslvs-UI/dist/Pyslvs.exe: \n win_generate_exe.bat \n REM batch file to generate Pyslvs.exe\nset Disk=y\n\nfor /f %%v in (\'python -c "from pyslvs_ui import __version__;print(__version__)"\') do set "PYSLVSVER=%%v"\nfor /f %%v in (\'python -c "import platform;print(\'\'.join(platform.python_compiler().split()[:2]).replace(\'.\', \'\').lower())"\') do set "COMPILERVER=%%v"\nfor /f %%v in (\'python -c "import platform;print(platform.machine().lower())"\') do set "SYSVER=%%v"\nset "EXENAME=pyslvs-%PYSLVSVER%.%COMPILERVER%-%SYSVER%"\n\npython -m PyInstaller -c -F "%Disk%:/tmp/Pyslvs-UI/scripts/entry.py" -n %EXENAME% -i "pyslvs_ui/icons/main.ico"  --add-data "pyslvs_ui/icons/*;pyslvs_ui/icons" --additional-hooks-dir "%Disk%:/tmp/Pyslvs-UI/scripts" \n y:\\tmp\\Pyslvs-UI>win_generate_exe.bat \n', 'tags': '', 'url': 'Pyinstaller.html'}, {'title': 'MCAD', 'text': 'SolidWorks: \n block.SLDPRT \n import pythoncom\nimport win32com.client\nimport win32api\nimport os\n \nos.system("taskkill /IM sldworks.exe /F")\nos.system("taskkill /IM sldworks_fs.exe /F")\n \n\'\'\'\nAbout DispatchEx and Dispatch Methods:\nhttps://stackoverflow.com/questions/18648933/using-pywin32-what-is-the-difference-between-dispatch-and-dispatchex\nSource code:\nhttp://pywin32.hg.sourceforge.net/hgweb/pywin32/pywin32/file/0db1b26904d5/com/win32com/src/PyIDispatch.cpp\nDoc:\nhttps://docs.microsoft.com/en-us/dotnet/standard/native-interop/com-callable-wrapper\n \nIDispatch: Provides a mechanism for late binding to type.\nIDispatchEx:\n    Interface supplied by the runtime if the class implements IExpando. The IDispatchEx interface is an extension of the IDispatch interface that, unlike IDispatch, enables enumeration, addition, deletion, and case-sensitive calling of members.\n\'\'\'\napp = win32com.client.DispatchEx("SldWorks.Application")\n#app=win32com.client.Dispatch("SldWorks.Application")\n \n# define var to convert variables\ndef var(type, value):\n    # type needs to be string\n    # use builtin getattr() to return pythoncom.type\n    pytype = getattr(pythoncom, type)\n    return win32com.client.VARIANT(pytype, value)\n \n# for two-type variable convert\n# is there any three-type variant?\ndef var2(type1, type2, value):\n    pytype1 = getattr(pythoncom, type1)\n    pytype2 = getattr(pythoncom, type2)\n    return win32com.client.VARIANT(pytype1|pytype2, value)\n     \ndef part(app, fileName, sketchName, dimName, newDim, newFileName):\n    arg1 = var("VT_I4", 1)\n    # GetMassProperties( ((3, 1), (16387, 3)))\n    #arg1 = win32com.client.VARIANT(pythoncom.VT_I4, 1)\n    arg2 = var("VT_I4", -1)\n \n    # 0. need the most important obj app\n    #app=win32com.client.Dispatch("SldWorks.Application")\n    # use relative directory to open part\n    # 1. open part file, need the path of the part file (need the file name)\n    #doc=app.OpenDoc(".\\\\block2.SLDPRT", 1)\n    doc=app.OpenDoc(os.path.join(os.getcwd(), fileName), 1)\n    # save part as binary stl\n    # can we save part as ASCII stl as well?\n    #doc.SaveAs2(".\\\\block2.stl", 0, True, False)\n    # the parameter VARIANT list for SelectByID2\n    # can we automate the VARIANT conversion?\n    # 2. use the sketch to select the SKETCH (need the sketch name)\n    #SelectByID2((8, 1), (8, 1), (5, 1), (5, 1), (5, 1), (11, 1), (3, 1), (9, 1), (3, 1))\n    #arg3 = var("VT_BSTR", "Sketch1")\n    arg3 = var("VT_BSTR", sketchName)\n    arg4 = var("VT_BSTR", "SKETCH")\n    arg5 = var("VT_R8", 0)\n    arg6 = var("VT_R8", 0)\n    arg7 = var("VT_R8", 0)\n    arg8 = var("VT_BOOL", False)\n    arg9 = var("VT_I4", 0)\n    arg10 = var("VT_DISPATCH", None)\n    arg11 = var("VT_I4", 0)\n    # select Sketch1 first\n    status = doc.Extension.SelectByID2(arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11)\n    # select DIMENSION to to modify\n    # 3. use the dimension name @ sketch name @ part file name\n    # to select the DIMENSION to modify\n    #arg12 = var("VT_BSTR", "Width@Sketch1@block2.SLDPRT")\n    arg12 = var("VT_BSTR", dimName+"@"+sketchName+"@"+fileName)\n    arg13 = var("VT_BSTR", "DIMENSION")\n    status = doc.Extension.SelectByID2(arg12, arg13, arg5, arg6, arg7, arg8, arg9, arg10, arg11)\n    #Dim swDimension As SldWorks.Dimension\n    # 4. to bring out the parameter to modify, need the dimension name and \n    # sketch name\n    #swDimension = doc.Parameter("Width@Sketch1")\n    swDimension = doc.Parameter(dimName+"@"+sketchName)\n    # the dimension unit is in meter\n    # 5. need the new value of the parameter\n    #swDimension.SystemValue = 0.50\n    swDimension.SystemValue = newDim\n    # 6. do the final house keeping process, clear selection and rebuild the part\n    sel = doc.ClearSelection2 \n    sel = True\n    status = doc.EditRebuild()\n    arg31 = var("VT_I4", 1)\n    arg32 = var2("VT_I4", "VT_BYREF", 3)\n    # 7. get the volume of the new part\n    volumn = doc.Extension.GetMassProperties(arg31, arg32)\n    #print(volumn[3]*1E9, "mm*3")\n    # 8. save the new part (need the new part file name)\n    #doc.SaveAs2(".\\\\block3.SLDPRT", 0, True, False)\n    doc.SaveAs2(os.path.join(os.getcwd(), "html/" + newFileName + ".SLDPRT"), 0, True, False)\n    # save jpg of part\n    doc.EditRebuild()\n    arg33 = var("VT_BSTR", "Isometric")\n    doc.ShowNamedView(arg33)\n    doc.ViewZoomtofit2()\n    doc.SaveAs3(os.path.join(os.getcwd(), "html/" + newFileName + ".jpg"), 0, 0)\n    # mm*3\n    return str(round(volumn[3]*1E9, 3)) + " mm*3"\nhtml = "以下零件採 SolidWorks 2017 SP 2.0 教育版繪製:<br /><br /><table border=\'1\' cellpadding=\'5\'><tr><th>Number</th><th>Part</th><th>Jpg</th><th>Width</th><th>Volume</th></tr>"\nindex = 0\nfor i in range(1, 11):\n    dim = i*0.002\n    blockVolume = part(app, "31_step.SLDPRT", "Sketch1", "Width", dim, "31_" + str(i))\n    print("31_" + str(i) + ".SLDPRT, dim= " + str(round(dim, 3)) +", volume= " + blockVolume)\n    index += 1\n    newFileName = "31_" + str(i)\n    html += \'\'\'<tr>\n    <td>\'\'\' + str(index) +\'\'\'</td>\n    <td><a href="./../downloads/sw_macro/html/\'\'\' + newFileName + \'\'\'.SLDPRT">\'\'\' + newFileName + \'\'\'.SLDPRT</a></td>\n    <td><img width="300" src="./../downloads/sw_macro/html/\'\'\' + newFileName + \'\'\'.jpg"></img></td>\n    <td>\'\'\' + str(round(dim*1000, 2)) + \'\'\' mm </td>\n    <td>\'\'\' + blockVolume + \'\'\'</td>\n    </tr>\n    \'\'\'\nhtml += "</table>"\n# save part.html\nwith open("./html/part.html", "w", encoding="utf-8") as f:\n     f.write(html)\n      \n\'\'\'\nfor assembly\n        swModelDocExt.SelectByID2("", "EDGE", -0.439825991092107, 7.07350481263802E-02, 0.40982045578545, true, 2, null, 0);\n        swModelDocExt.SelectByID2("", "EDGE", -0.219003008311574, 0.073085842475507, 0.549481823985616, true, 4, null, 0);\n        swModelDocExt.SelectByID2("Part-3@AssemModel", "COMPONENT", 0, 0, 0, true, 1, null, 0);\n        swFeature = (Feature)swFeatureManager.FeatureLinearPattern2(3, 40 / 1000, 0, 0, false, true, "NULL", "NULL", false);\n        assemblyModel.ClearSelection2(true);\n\'\'\'\nos.system("taskkill /IM sldworks.exe /F")\nos.system("taskkill /IM sldworks_fs.exe /F")\n# now the SolidWorks is embedding \n AutoDesk Inventor: \n import pythoncom\nimport win32com.client\nimport win32api\nimport os\n \n# Open Inventor\ninvApp = win32com.client.Dispatch("Inventor.Application")\n#print(invApp)\ninvApp.Visible = True\n \ninvApp.SilentOperation = True\n \n# Set location of assembly\npartName = \'C:/tmp/Part1.ipt\'\n \n# Open the model\noDoc = invApp.Documents.Open(partName)\n# use UserParameters to access the user parameters\n#oUserParams = oDoc.ComponentDefinition.Parameters.UserParameters\n#oNewParam = oUserParams.AddByExpression("x", "9", "mm")\n# use Item() to get the model parameter named "d0"\nd0 = oDoc.ComponentDefinition.Parameters.Item("d0")\n# Expression can add dimension unit\n#d0.Expression = "2 cm"\n# Value use the default system unit: cm\nd0.Value = 2\n# use Update() method to get the new part volume\noDoc.Update()\n# fit the active view and save the part image\ninvApp.ActiveView.Fit(True)\noDoc.SaveAs("C:/tmp/Part1.png", True)\nprint(oDoc.ComponentDefinition.MassProperties.Volume)\n#invApp.Quit() \n Siemens NX: \n block.prt \n # nx_open_part.py\n# 導入 NXOpen\nimport NXOpen\nimport NXOpen.UF\nimport NXOpen.Gateway\n   \ndef main():\n    # 取得目前開啟的工作階段\n    theSession = NXOpen.Session.GetSession()\n    theUfSession = NXOpen.UF.UFSession.GetUFSession()\n      \n    # 建立 ListingWindow\n    listWin= theSession.ListingWindow\n    # 開啟零件檔案\n    basePart1 = theSession.Parts.OpenBaseDisplay("c:/tmp/block.prt")\n    workPart = theSession.Parts.Work\n    unit1 = workPart.UnitCollection.FindObject("MilliMeter")\n    # height\n    p7 = workPart.Expressions.FindObject("p7")\n    # width\n    p8 = workPart.Expressions.FindObject("p8")\n    # length\n    p9 = workPart.Expressions.FindObject("p9")\n    workPart.Expressions.EditWithUnits(p7, unit1, "30")\n    workPart.Expressions.EditWithUnits(p8, unit1, "60")\n    workPart.Expressions.EditWithUnits(p9, unit1, "90")\n    theSession.UpdateManager.DoUpdate(0)\n    #saveStatus1 = workPart.SaveAs("c:/tmp/block_new.prt")\n    #saveStatus1.Dispose()\n    # initialize list to hold bodies\n    theBodyTags = []\n   \n    for x in workPart.Bodies:\n        if x.IsSolidBody:\n            theBodyTags.append(x.Tag)\n      \n    # 準備輸出 ASCII 格式 STL 零件檔案\n    sTLCreator1 = theSession.DexManager.CreateStlCreator()\n    sTLCreator1.AutoNormalGen = True\n    sTLCreator1.ChordalTol = 0.08\n    sTLCreator1.AdjacencyTol = 0.08\n    sTLCreator1.OutputFile = "C:\\\\tmp\\\\block_ascii.stl"\n    # Binary STL: NXOpen.STLCreatorOutputTypeEnum.Binary\n    sTLCreator1.OutputType = NXOpen.STLCreatorOutputTypeEnum.Text\n    # 已知 body1 命名\n    body1 = workPart.Bodies.FindObject("EXTRUDE(2)")\n    added1 = sTLCreator1.ExportSelectionBlock.Add(body1)\n    nXObject1 = sTLCreator1.Commit()\n    sTLCreator1.Destroy()\n  \n    # 開啟所建立的 ListingWindow\n    listWin.Open()\n    listWin.WriteLine("number of solid bodies: " + str(len(theBodyTags)))\n   \n    (massProps, Stats) = theUfSession.Modeling.AskMassProps3d(theBodyTags, len(theBodyTags), 1, 4, .03, 1, [0.99,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0])\n    listWin.WriteLine("units: kg, mm")\n    listWin.WriteLine("surface area: " + str(massProps[0]))\n    listWin.WriteLine("volume: " + str(massProps[1]*1E9))\n    # 在 ListingWindow 中寫入字串\n    listWin.WriteLine("Hello, NXOpen")\n    listWin.Close()\n     \n    # 將零件檔案 fit 之後, export 出 png 檔案\n    theUI = NXOpen.UI.GetUI()\n    imageExportBuilder1 = theUI.CreateImageExportBuilder()\n \n    custombackgroundcolor1 = [None] * 3\n    custombackgroundcolor1[0] = 1.0\n    custombackgroundcolor1[1] = 1.0\n    custombackgroundcolor1[2] = 1.0\n \n    imageExportBuilder1.SetCustomBackgroundColor(custombackgroundcolor1)\n    imageExportBuilder1.FileFormat = NXOpen.Gateway.ImageExportBuilder.FileFormats.Png\n    imageExportBuilder1.FileName = "c:\\\\tmp\\\\block.png"\n \n    imageExportBuilder1.BackgroundOption = NXOpen.Gateway.ImageExportBuilder.BackgroundOptions.Original\n \n    imageExportBuilder1.EnhanceEdges = False\n    imageExportBuilder1.RegionMode = False\n    # fit view 後 commit export png\n    workPart.ModelingViews.WorkView.Fit()\n    nXObject6 = imageExportBuilder1.Commit()\n \n    imageExportBuilder1.Destroy()\n      \nif __name__ == "__main__":\n    main()', 'tags': '', 'url': 'MCAD.html'}, {'title': 'Solid Edge', 'text': 'SDK \n The Solid Edge SDK provides developers with a range of tools and resources to create custom applications that interact with the Solid Edge software. The SDK includes documentation that covers the Solid Edge API, which provides access to the core functionality of the software. This allows developers to automate tasks, such as creating and modifying parts and assemblies, generating drawings and reports, and performing simulations and analyses. The SDK also includes sample code and libraries that demonstrate how to use the API and provide a starting point for developing custom applications. These resources can help developers get up and running quickly and reduce the time it takes to create a working application. One of the key benefits of using the Solid Edge SDK is the ability to support collaborative mechanical design processes. By creating custom applications that integrate with other tools and systems used in the design process, developers can help improve communication and collaboration between team members. This can help reduce errors, improve efficiency, and speed up the design process. \n For example, a developer could create an application that integrates Solid Edge with a project management tool. This could allow team members to share design data, track progress, and collaborate on tasks directly within the project management tool. This could help improve visibility into the design process and ensure that everyone is working from the same information. Overall, the Solid Edge SDK provides developers with a powerful set of tools to create custom applications that extend the functionality of Solid Edge and improve its integration with other systems. \n Solid Edge 2020 SDK (siemens.com) \n 如何透過 Python 重用 Windows TLB or OCX 等 DLL 動態連結程式庫 \n pywin32: pip install pywin32 \n 就可以利用 python -m win32com.client.combrowse 瀏覽操作系統中的 COM 程式庫. \n 若要將 Solid Edge Type library 轉為 .py, 執行 python -m win32com.client.makepy -i \n Y:\\>python -m win32com.client.makepy -i\nSolid Edge Geometry Type Library\n {3E2B3BE1-F0B9-11D1-BDFD-080036B4D502}, lcid=0, major=1, minor=0\n >>> # Use these commands in Python code to auto generate .py support\n >>> from win32com.client import gencache\n >>> gencache.EnsureModule(\'{3E2B3BE1-F0B9-11D1-BDFD-080036B4D502}\', 0, 1, 0) \n 接著利用 Python 程式執行, 列出轉為 .py 後的 Type Library 所在位置: \n from win32com.client import gencache\n \ngeom_type_lib = gencache.EnsureModule(\'{3E2B3BE1-F0B9-11D1-BDFD-080036B4D502}\', 0, 1, 0)\nprint(dir(geom_type_lib))\nprint(repr(geom_type_lib)) \n 執行後可以取得 Solid Edge Geometry Type Library 轉出 .py 後的檔案所在目錄: \n <module \'win32com.gen_py.3E2B3BE1-F0B9-11D1-BDFD-080036B4D502x0x1x0\' from \'C:\\\\Users\\\\pj2023\\\\AppData\\\\Local\\\\Temp\\\\gen_py\\\\3.11\\\\3E2B3BE1-F0B9-11D1-BDFD-080036B4D502x0x1x0.py\'> \n Python for Solid Edge API example: \n import win32com.client\nimport os\nimport random\nimport string\n  \ndef password_generator(size=4, chars=string.ascii_lowercase + string.digits):\n  \n    """Generate random password\n    """\n    return \'\'.join(random.choice(chars) for _ in range(size))\n  \npass_string = "abcdefghkmnpqrstuwxyz123456789"\n#for i in range(10):\n    #print(password_generator(4, pass_string))\n \nnew_part_name = password_generator(4, pass_string)\n \n# Connect to a running instance of Solid Edge\napplication = win32com.client.Dispatch("SolidEdge.Application")\n \n# Get the documents collection\ndocuments = application.Documents\n \n# Set the path to the part file\npart_file_path = os.path.join(os.getcwd(), "Part1.par")\n \n# Open the part file\npart = documents.Open(part_file_path)\n#print(dir(part))\n \n# Get the models collection\nmodels = part.Models\n#print(dir(models))\n \n# Get the first model in the collection\nmodel = models.Item(1)\n#print(dir(model))\n \ndocument = model.Document\n#print(dir(document))\n \nvariables = document.Variables\n \n# Get the variable you want to modify\nwidth = variables.Item("Width")\nlength = variables.Item("Length")\nheight = variables.Item("Height")\n \n# Set the new value for the variable in meter?\n \nlength.Value = random.SystemRandom().uniform(0.1, 0.3)\nwidth.Value = random.SystemRandom().uniform(0.1, 0.3)\nheight.Value = random.SystemRandom().uniform(0.1, 0.3)\n \n# Update the model to reflect the changes\n#document.UpdateOnFileSave = True\nmodel.Recompute()\n \n# Set the path for the new file\nnew_file_path = os.path.join(os.getcwd(), new_part_name + ".par")\n \n# Save the modified part to a new file\ndocument.SaveAs(new_file_path) \n Modify assembly variables: \n import win32com.client\n \n# Connect to a running instance of Solid Edge\napplication = win32com.client.Dispatch("SolidEdge.Application")\n \n# Get the active assembly document\nassembly_document = application.ActiveDocument\n \n# Get the first occurrence in the assembly\noccurrence = assembly_document.Occurrences.Item(1)\n \n# Get the part document associated with the occurrence\npart_document = occurrence.OccurrenceDocument\n \n# Get the variables collection of the part document\nvariables = part_document.Variables\n \n# Get a specific variable by its name\nvariable = variables.Item("VariableName")\n \n# Modify the value of the variable\nvariable.Value = 10\n \n# Update the assembly\nassembly_document.Update()\n \n Flask and Solid Edge: \n from flask import Flask, render_template, request\nimport win32com.client\n \napp = Flask(__name__)\n \n# Constants\nfilename = \'C:\\\\Path\\\\To\\\\YourFile.par\'\n \n@app.route(\'/\', methods=[\'GET\', \'POST\'])\ndef index():\n    if request.method == \'POST\':\n        new_length = float(request.form[\'length\'])\n \n        # Start Solid Edge\n        application = win32com.client.Dispatch(\'SolidEdge.Application\')\n \n        # Open the document\n        document = application.Documents.Open(filename)\n \n        # Get the variables collection\n        variables = document.Variables\n \n        # Get the length variable\n        length_variable = variables.Item(\'Length\')\n \n        # Set the new value\n        length_variable.Value = new_length\n \n        # Update the document\n        document.Update()\n \n        # Get the models collection\n        models = document.Models\n \n        # Get the first model\n        model = models.Item(1)\n \n        # Calculate the volume\n        volume = model.ComputePhysicalProperties().Volume\n \n        # Save the document\n        document.Save()\n \n        # Close the document\n        document.Close()\n \n        return render_template(\'index.html\', volume=volume)\n    else:\n        return render_template(\'index.html\')\n \nif __name__ == \'__main__\':\n    app.run() \n index.html \n <!DOCTYPE html>\n<html>\n    <head>\n        <title>Solid Edge API</title>\n    </head>\n    <body>\n        <form method="post">\n            <label for="length">Length:</label>\n            <input type="text" id="length" name="length">\n            <input type="submit" value="Submit">\n        </form>\n        {% if volume %}\n            <p>New volume: {{ volume }}</p>\n        {% endif %}\n    </body>\n</html> \n Create Part by api: \n import win32com.client\n\xa0\n# Constants\nfilename = \'C:\\\\tmp\\\\new.par\'\nmaterial_name = \'Steel\'\n\xa0\n# Start Solid Edge\napplication = win32com.client.Dispatch(\'SolidEdge.Application\')\n\xa0\n# Create a new part document\ndocument = application.Documents.Add(\'SolidEdge.PartDocument\')\n# Get the ref planes collection\nref_planes = document.RefPlanes\n\'\'\'\n# Define the points\npoint1 = (0, 0, 0)\npoint2 = (100, 0, 0)\npoint3 = (0, 100, 0)\n\xa0\n# Add the reference plane\nref_plane = ref_planes.AddBy3Points(point1, point2, point3)\n\'\'\'\n# Get the profile sets collection\nprofile_sets = document.ProfileSets\n\xa0\n# Add a new profile set\nobjProfile = profile_sets.Add()\n\xa0\n\xa0\nobjP1 = objProfile.Points2d.Add(0, 0)\n\xa0\n\xa0\nobjP2 = objProfile.Points2d.Add(0.01, 0)\n\xa0\nobjP3 = objProfile.Points2d.Add(0, 0.01)\n\xa0\nobjEdgeSet[0] = objP1\n\xa0\n\xa0\nobjEdgeSet[1] = objP2\n\xa0\nobjEdgeSet[2] = objP3\nobjkeyPoints[0] = SolidEdgeConstants.KeyPointType.igKeyPointStart\n\xa0\n\xa0\nobjkeyPoints[1] = SolidEdgeConstants.KeyPointType.igKeyPointMiddle\n\xa0\nobjkeyPoints[2] = SolidEdgeConstants.KeyPointType.igKeyPointEnd\n\xa0\nobjNumEdges = 3\n\xa0\nobjRPNTC = document.RefPlanes.AddBy3Points(objNumEdges, objEdgeSet, objkeyPoints)\n\xa0\n\xa0\nobjRPNTC.Visible = True\n# Save the document\ndocument.Save()\n\xa0\n# Close the document\ndocument.Close()\n\'\'\'\n# Get the profile sets collection\nprofile_sets = document.ProfileSets\n\xa0\n# Add a new profile set\nprofile_set = profile_sets.Add()\n\xa0\n# Get the profiles collection\nprofiles = profile_set.Profiles\n\xa0\n#print(dir(profiles))\n\xa0\napplication.DoIdle()\n\xa0\n#Get a reference to the RefPlanes collection.\nrefPlanes = document.RefPlanes\nprint(dir(refPlanes))\n\xa0\n#Get a reference to front RefPlane.\nrefPlane = refPlanes.GetFrontPlane()\n\xa0\n# Add a new profile\nprofile = profiles.AddRef()\n\xa0\n# Get the lines2d collection\nlines2d = profile.Lines2d\n\xa0\n# Draw a rectangle\nline1 = lines2d.AddBy2Points(0, 0, 100, 0)\nline2 = lines2d.AddBy2Points(100, 0, 100, 10)\nline3 = lines2d.AddBy2Points(100, 10, 0, 10)\nline4 = lines2d.AddBy2Points(0, 10, 0, 0)\n\xa0\n# Define the profile as closed\nprofile.End(ProfileEndCap.Round)\n\xa0\n# Get the models collection\nmodels = document.Models\n\xa0\n# Create an extruded protrusion\nextruded_protrusion = models.AddProtrusionExtruded(profile_set, ProfilePlaneSide.PlaneSidePositive, ProfileEndCap.Round, 100)\n\xa0\n# Get the materials collection\nmaterials = document.Materials\n\xa0\n# Get the steel material\nmaterial = materials.Item(material_name)\n\xa0\n# Set the material of the model\nmodel = models.Item(1)\nmodel.Material = material\n\xa0\n# Save the document\ndocument.SaveAs(filename)\n\xa0\n# Close the document\ndocument.Close()\n\'\'\' \n get part volume and save: \n import win32com.client\n\xa0\n# Constants\nfilename = \'C:\\\\Path\\\\To\\\\YourFile.par\'\nnew_length = 100.0\n\xa0\n# Start Solid Edge\napplication = win32com.client.Dispatch(\'SolidEdge.Application\')\n\xa0\n# Open the document\ndocument = application.Documents.Open(filename)\n\xa0\n# Get the variables collection\nvariables = document.Variables\n\xa0\n# Get the length variable\nlength_variable = variables.Item(\'Length\')\n\xa0\n# Set the new value\nlength_variable.Value = new_length\n\xa0\n# Update the document\ndocument.Update()\n\xa0\n# Get the models collection\nmodels = document.Models\n\xa0\n# Get the first model\nmodel = models.Item(1)\n\xa0\n# Calculate the volume\nvolume = model.ComputePhysicalProperties().Volume\n\xa0\n# Save the document\ndocument.Save()\n\xa0\n# Close the document\ndocument.Close()\n\xa0\nprint(f\'New volume: {volume}\') \n Assembly example: \n import win32com.client\nimport os\n\xa0\n# Connect to a running instance of Solid Edge\napplication = win32com.client.Dispatch("SolidEdge.Application")\n\xa0\n# Get the documents collection\ndocuments = application.Documents\n\xa0\n# Set the path to the part file\nassem_file_path = os.path.join(os.getcwd(), "Assem1.par")\n\xa0\n# Open the part file\nassembly= documents.Open(assem_file_path)\n#print(dir(assembly))\n\xa0\n# Get the occurrences collection\noccurrences = assembly.Occurrences\n\xa0\n# Get the first occurrence in the collection\noccurrence = occurrences.Item(1)\n\xa0\ndocument = occurrence.Document\n\xa0\n# Get the variables collection\nvariables = document.Variables\n\xa0\n# Get the variable you want to modify\nmy_variable = variables.Item("MyVariable")\n\xa0\n# Set the new value for the variable\nmy_variable.Value = 50\n\xa0\n# Update the model to reflect the changes\ndocument.UpdateOnFileSave = True\n\xa0\n# Set the path for the new file\nnew_file_path = os.path.join(os.getcwd(), "newAssem1.par") \n api cube with random new part filename: \n import win32com.client\nimport os\nimport random\nimport string\n  \ndef password_generator(size=4, chars=string.ascii_lowercase + string.digits):\n  \n    """Generate random password\n    """\n    return \'\'.join(random.choice(chars) for _ in range(size))\n  \npass_string = "abcdefghkmnpqrstuwxyz123456789"\n#for i in range(10):\n    #print(password_generator(4, pass_string))\n \nnew_part_name = password_generator(4, pass_string)\n \n# Connect to a running instance of Solid Edge\napplication = win32com.client.Dispatch("SolidEdge.Application")\n \n# Get the documents collection\ndocuments = application.Documents\n \n# Set the path to the part file\npart_file_path = os.path.join(os.getcwd(), "Part1.par")\n \n# Open the part file\npart = documents.Open(part_file_path)\n#print(dir(part))\n \n# Get the models collection\nmodels = part.Models\n#print(dir(models))\n \n# Get the first model in the collection\nmodel = models.Item(1)\n#print(dir(model))\n \ndocument = model.Document\n#print(dir(document))\n \nvariables = document.Variables\n \n# Get the variable you want to modify\nwidth = variables.Item("Width")\nlength = variables.Item("Length")\nheight = variables.Item("Height")\n \n# Set the new value for the variable in meter?\n \nlength.Value = random.SystemRandom().uniform(0.1, 0.3)\nwidth.Value = random.SystemRandom().uniform(0.1, 0.3)\nheight.Value = random.SystemRandom().uniform(0.1, 0.3)\n \n# Update the model to reflect the changes\n#document.UpdateOnFileSave = True\nmodel.Recompute()\n \n# Set the path for the new file\nnew_file_path = os.path.join(os.getcwd(), new_part_name + ".par")\n \n# Save the modified part to a new file\ndocument.SaveAs(new_file_path) \n Create Extrusion: \n python -m win32com.client.makepy to interactively generate SolidEdgePart.py in C:\\Users\\Account\\AppData\\Local\\Temp\\gen_py\\3.11 \n SolidEdgePart_create_extrusion_example.7z  (for Solid Edge version 2210 and downloaded for @nfu users only) \n import win32com.client\nimport SolidEdgePart\n \n# Start Solid Edge\napplication = win32com.client.Dispatch("SolidEdge.Application")\n \n# Make the application visible\napplication.Visible = True\n \n# Create a new part document\npartDocument = application.Documents.Add("SolidEdge.PartDocument")\n \n# Get the refPlanes collection\nrefPlanes = partDocument.RefPlanes\n \n# Get the top plane\ntopPlane = refPlanes.Item(3)\n \n# Add a new sketch on the top plane\nsketch = partDocument.Sketches.AddByPlane(topPlane)\n \n# Get the profile\nprofile = sketch.Profiles.Add(topPlane)\n \n# Draw a circle with center at (0,0) and radius 0.05\ncircle = profile.Circles2d.AddByCenterRadius(0, 0, 0.05)\n \n# Close the profile\nprofile.End(2)\n \n# Define the extrusion parameters\nextrusionDistance = "0.1"\nextrusionDirection = SolidEdgePart.constants.igRight\n \n# Create the extrusion using AddFiniteExtrudedProtrusion\nextrusion = partDocument.Models.AddFiniteExtrudedProtrusion(1, [profile], extrusionDirection, extrusionDistance)\n \n# Save the part file\npartDocument.SaveAs(r"C:\\Path\\To\\PartFile.par") \n import win32com.client\nimport SolidEdgePart\n \n# Start Solid Edge\napplication = win32com.client.Dispatch("SolidEdge.Application")\n \n# Make the application visible\napplication.Visible = True\n \n# Create a new part document\npartDocument = application.Documents.Add("SolidEdge.PartDocument")\n \n# Get the refPlanes collection\nrefPlanes = partDocument.RefPlanes\n \n# Get the top plane\ntopPlane = refPlanes.Item(3)\n \n# Add a new sketch on the top plane\nsketch = partDocument.Sketches.AddByPlane(topPlane)\n \n# Get the profile\nprofile = sketch.Profiles.Add(topPlane)\n \n# Draw the outer rectangle of the link using four lines\nline1 = profile.Lines2d.AddBy2Points(-0.1, -0.05, 0.1, -0.05)\nline2 = profile.Lines2d.AddBy2Points(0.1, -0.05, 0.1, 0.05)\nline3 = profile.Lines2d.AddBy2Points(0.1, 0.05, -0.1, 0.05)\nline4 = profile.Lines2d.AddBy2Points(-0.1, 0.05, -0.1, -0.05)\n \n# Draw the first hole\ncircle1 = profile.Circles2d.AddByCenterRadius(-0.05, 0, 0.02)\n \n# Draw the second hole\ncircle2 = profile.Circles2d.AddByCenterRadius(0.05, 0, 0.02)\n \n# Close the profile\nprofile.End(2) # 2 corresponds to igProfileClosed\n \n# Define the extrusion parameters\nextrusionDistance = 0.1\nextrusionDirection = SolidEdgePart.constants.igRight\n \n# Create the extrusion using AddFiniteExtrudedProtrusion\nextrusion = partDocument.Models.AddFiniteExtrudedProtrusion(1, [profile], extrusionDirection, extrusionDistance)\n \n# fix according to https://community.sw.siemens.com/s/question/0D54O000061xsuMSAQ/circle-extrusion-problem \n 參考: \n Solid Edge Programming Guide.pdf  (for @nfu users only) \n Solid Edge Type Library for Python.7z  (for @nfu users only) \n', 'tags': '', 'url': 'Solid Edge.html'}, {'title': 'References', 'text': 'PMKS:  https://github.com/DesignEngrLab/PMKS \n PMKS+:  https://app.pmksplus.com/ \n PMKS+: Recreating a Legacy Application \n MotionGen:  https://motiongen.io/ \n https://github.com/ziceptor/Pyslvs-PyQt5 \n', 'tags': '', 'url': 'References.html'}, {'title': 'Papers', 'text': '1996 An Automated Procedure for Dimensional Synthesis of Planar Mechanisms \n 2008 Evolutionary synthesis of kinematic mechanisms \n 2015 Automatic Structural Synthesis of Planar Mechanisms and Its Application to Creative Design \n 2017 Kinematic Synthesis using Reinforcement Learning \n 2019 A Machine Learning Approach to Kinematic Synthesis of Defect-Free Planar Four-Bar Linkages', 'tags': '', 'url': 'Papers.html'}]};