    // Function to toggle the visibility of the popup and overlay
    function togglePopup() {
        var overlay = document.getElementById('overlay');
        var popup = document.getElementById('popup');
        if (overlay.style.display === 'block') {
            overlay.style.display = 'none';
            popup.style.display = 'none';
        } else {
            overlay.style.display = 'block';
            popup.style.display = 'flex'; /* Change display to flex */
        }
    }

    // Function to show category content on the right sidebar
    function showCategory(category) {
        var categoryContent = document.getElementById('categoryContent');
        if (category === 'General') {
            categoryContent.innerHTML = "<h2>General Settings</h2><p>Here are your general settings.</p>";
        } else if (category === 'Appearance') {
            categoryContent.innerHTML = "<h2>Appearance Settings</h2><p>Here are your appearance settings.</p>";
        } else if (category === 'Notifications') {
            categoryContent.innerHTML = "<h2>Notification Settings</h2><p>Here are your notification settings.</p>";
        }
    }
