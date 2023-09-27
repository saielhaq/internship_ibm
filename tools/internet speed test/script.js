
            var speedButton = document.getElementById('speed-check');
            speedButton.addEventListener('click', InitiateSpeedDetection, false);

            var imageAddr = "https://hackthestuff.com/images/test.jpg";
            var downloadSize = 13055440;
            
            function ShowProgressMessage(msg) {
                document.getElementById('result').innerHTML = msg;
            }

            function InitiateSpeedDetection() {
                ShowProgressMessage("please wait...");
                window.setTimeout(MeasureConnectionSpeed, 0);
            };

            function MeasureConnectionSpeed() {
                var startTime, endTime;
                var download = new Image();
                download.onload = function () {
                    endTime = (new Date()).getTime();
                    showResults();
                }
                download.onerror = function (err, msg) {
                    ShowProgressMessage("Invalid image, or error downloading");
                }
                startTime = (new Date()).getTime();
                var cacheBuster = "?nnn=" + startTime;
                download.src = imageAddr + cacheBuster;
                function showResults() {
                    var duration = (endTime - startTime) / 1000;
                    var bitsLoaded = downloadSize * 8;
                    var speedBps = (bitsLoaded / duration).toFixed(2);
                    var speedKbps = (speedBps / 1024).toFixed(2);
                    var speedMbps = (speedKbps / 1024).toFixed(2);

                    if (speedMbps > 1) {
                        ShowProgressMessage(speedMbps+" Mbps");
                    } else if (speedKbps > 1) {
                        ShowProgressMessage(speedMbps+" Mbps");
                    } else {
                        ShowProgressMessage(speedMbps+" Mbps");
                    }
                }
            }
        