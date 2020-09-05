const getContentType = (fileExtension) => {
  switch (fileExtension) {
    case ".js":
      return "application/javascript";

    case ".json":
      return "application/json";

    case ".txt":
      return "text/plain";

    case ".css":
      return "text/css";

    case ".htm":
    case ".html":
      return "text/html";
    case ".xhtml":
      return "application/xhtml+xml";

    //  images
    case ".svg":
      return "image/svg+xml";

    case ".tif":
    case ".tiff":
      return "image/tiff";

    case ".jpg":
    case ".jpeg":
      return "image/jpeg";

    case ".png":
      return "image/png";

    case ".gif":
      return "image/gif";

    case ".bmp":
      return "image/bmp";

    case ".ico":
      return "image/x-icon";

    case ".webp":
      return "image/webp";

    case ".mid":
    case ".midi":
      return "audio/midi";

    case ".wav":
      return " audio/wav";

    case ".mp3":
      return "audio/mpeg";

    case ".webm":
      return "audio/webm";

    case ".ogg":
      return "audio/ogg";

    case ".aac":
      return "audio/aac";

    case ".mpeg":
      return "video/mpeg";

    case ".mp4":
      return "video/mp4";

    case ".flv":
      return "video/x-flv";

    case ".m3u8":
      return "application/x-mpegURL";

    case ".ts":
      return "video/MP2T";

    case ".3gp":
      return "video/3gpp";

    case ".mov":
      return "video/quicktime";

    case ".avi":
      return "video/x-msvideo";

    case ".wmv":
      return "video/x-ms-wmv";

    case ".swf":
      return "application/x-shockwave-flash";

    // fonts
    case ".woff":
      return "font/woff";

    case ".woff2":
      return "font/woff2";

    case ".otf":
      return "font/otf";

    case ".ttf":
      return "font/ttf";

    case ".eot":
      return "font/eot";

    // archives
    case ".zip":
      return "application/zip";

    case ".7z":
      return "application/x-7z-compressed";

    case ".tar":
      return "application/x-tar";

    case ".rar":
      return "application/x-rar-compressed";

    case ".bz":
      return "application/x-bzip";

    case ".bz2":
      return "application/x-bzip2";

    case ".jar":
      return "application/java-archive";

    case ".pdf":
      return "application/pdf";

    case ".rtf":
      return "application/rtf";

    case ".xml":
      return "application/xml";

    case ".doc":
    case ".docx":
      return "application/msword";

    case ".xls":
    case ".xlsx":
      return "application/vnd.ms-excel";

    case ".ppt":
      return "application/vnd.ms-powerpoint";

    case ".epub":
      return "application/epub+zip";

    case ".odt":
      return "application/vnd.oasis.opendocument.text";

    case ".ods":
      return "application/vnd.oasis.opendocument.spreadsheet";

    case ".odp":
      return "application/vnd.oasis.opendocument.presentation";

    case ".xul":
      return "application/vnd.mozilla.xul+xml";

    case ".sh":
      return "application/x-sh";

    default:
      return "application/octet-stream";
  }
};

module.exports = getContentType;
